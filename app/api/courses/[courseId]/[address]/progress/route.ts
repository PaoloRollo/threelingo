import { NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string; address: string } }
) {
  const { data } = await supabase
    .from("progresses")
    .select("*")
    .eq("course_id", parseInt(params.courseId))
    .eq("address", params.address)
    .limit(1);

  if (data && data.length > 0) {
    return new Response(
      JSON.stringify({
        result: data[0],
      }),
      { status: 200 }
    );
  }

  await supabase.from("progresses").insert({
    address: params.address,
    course_id: parseInt(params.courseId),
    current_section: 0,
    current_step: 0,
    current_unit: 0,
  });

  const { data: newData } = await supabase
    .from("progresses")
    .select("*")
    .eq("course_id", parseInt(params.courseId))
    .eq("address", params.address)
    .limit(1);

  return new Response(
    JSON.stringify({
      result: newData && newData.length > 0 ? newData[0] : null,
    }),
    { status: 200 }
  );
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { courseId: string; address: string } }
) {
  let { currentStep, currentUnit, currentSection } = await req.json();

  const { data: courseData } = await supabase
    .from("courses")
    .select("*")
    .eq("id", parseInt(params.courseId))
    .limit(1);

  if (!courseData) {
    // return 404
    return new Response(
      JSON.stringify({
        result: "course not found.",
      }),
      { status: 404 }
    );
  }

  const { sections } = courseData[0];
  const sectionsJsonArray = sections as [
    {
      units: [
        {
          steps: any[];
        }
      ];
    }
  ];

  const step =
    sectionsJsonArray[currentSection]["units"][currentUnit]["steps"][
      currentStep
    ];

  if (!step) {
    const newUnit = sectionsJsonArray[currentSection]["units"][currentUnit + 1];
    if (newUnit) {
      await supabase
        .from("progresses")
        .update({
          current_step: 0,
          current_unit: currentUnit + 1,
          current_section: currentSection,
        })
        .eq("course_id", parseInt(params.courseId))
        .eq("address", params.address);
    } else {
      const newSection = sectionsJsonArray[currentSection + 1];
      if (newSection) {
        await supabase
          .from("progresses")
          .update({
            current_step: 0,
            current_unit: 0,
            current_section: currentSection + 1,
          })
          .eq("course_id", parseInt(params.courseId))
          .eq("address", params.address);
      } else {
        await supabase
          .from("progresses")
          .update({
            completed: true,
            current_step: currentStep,
          })
          .eq("course_id", parseInt(params.courseId))
          .eq("address", params.address);

        try {
          await fetch(
            "https://notify.walletconnect.com/62066586b5adc509f3304c9312077975/notify",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.WALLETCONNECT_NOTIFY_API_SECRET}`,
              },
              body: JSON.stringify({
                notification: {
                  type: "ae0cbbe9-a59f-4e21-ac28-fbf4fad2e11d",
                  title: "NFT inbound!",
                  body: "You just received an NFT from threelingo via Peanut Protocol!",
                  icon: "https://threelingo.vercel.app/threelingo_logo.png",
                  url: "https://threelingo.vercel.app",
                },
                accounts: [`eip155:1:${params.address}`],
              }),
            }
          );
        } catch (e) {
          console.error(`error while sending peanut link via web3inbox.`);
        }
      }
    }
  } else {
    await supabase
      .from("progresses")
      .update({
        current_step: currentStep,
        current_unit: currentUnit,
        current_section: currentSection,
      })
      .eq("course_id", parseInt(params.courseId))
      .eq("address", params.address);
  }

  const { data } = await supabase
    .from("progresses")
    .select("*")
    .eq("course_id", parseInt(params.courseId))
    .eq("address", params.address)
    .limit(1);

  if (data && data?.length > 0 && data[0] && data[0].completed) {
    // get the latest link
    const { data: peanutLinkData } = await supabase
      .from("peanut_links")
      .select("*")
      .eq("courseId", parseInt(params.courseId))
      .limit(1);

    console.log("peanutLinkData", peanutLinkData);
    if (peanutLinkData && peanutLinkData.length > 0) {
      return new Response(
        JSON.stringify({
          result: { ...data[0], peanutLink: peanutLinkData[0].link },
        }),
        { status: 200 }
      );
    }
  }

  return new Response(
    JSON.stringify({
      result: data && data.length > 0 ? data[0] : null,
    }),
    { status: 200 }
  );
}
