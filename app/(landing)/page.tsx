"use client";
import Marquee from "@/components/landing-components/marquee";
import { availableCourses } from "@/lib/courses";
import { Button, Link, cn } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BotIcon, GraduationCapIcon, TabletSmartphoneIcon } from "lucide-react";

const IntegrationCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border px-4 py-2 md:w-64",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "flex flex-col items-start justify-center"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="font-bold dark:text-white">{name}</figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed py-3 w-full flex justify-around border-b-2 bg-background z-20">
        <h1 className="font-extrabold text-3xl text-primary px-4">
          threelingo
        </h1>
        <Button
          variant="solid"
          color="primary"
          className="font-bold uppercase tracking-widest"
          as={Link}
          href="/start"
        >
          Start now
        </Button>
      </div>
      <section
        id="landing"
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background"
      >
        {/* <Globe className="mt-auto -mb-40 md:-mb-72" /> */}
        <div className="flex flex-col z-10 select-none">
          <h1 className="text-5xl md:text-8xl font-extrabold text-center text-primary">
            threelingo
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-4">
            The free, fun, and effective way to enter web3!
          </h2>
          <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4 mx-auto w-full items-center justify-center mt-4 px-4">
            <Button
              variant="solid"
              color="primary"
              className="font-bold uppercase tracking-widest w-full"
              as={Link}
              href="/start"
            >
              Start now
            </Button>
            <Button
              variant="ghost"
              color="primary"
              className="font-bold uppercase tracking-widest w-full"
              as={Link}
              href="/login"
            >
              Already registered?
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 py-4 w-full flex justify-around border-2 bg-background z-10">
          {/* <div className="flex space-x-8 overflow-hidden w-full"> */}
          <Marquee pauseOnHover className="[--duration:10s] w-full">
            {availableCourses.concat(availableCourses).map((course, index) => (
              <IntegrationCard
                name={course.name}
                img={course.image}
                key={`${course.id}-${index}`}
              />
            ))}
          </Marquee>
        </div>
      </section>
      <motion.section
        id="how"
        className="h-screen flex flex-col items-center justify-center relative bg-primary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-md text-center text-white"
          >
            <GraduationCapIcon size={48} />
            <h3 className="font-extrabold text-3xl md:text-5xl mt-2">
              free. fun. effective.
            </h3>
            <p className="opacity-70">
              Learning with <span className="font-bold">threelingo</span> is
              free, fun and effective, since we copied pretty much everything
              from Duolingo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-md text-center text-white"
          >
            <BotIcon size={48} />
            <h3 className="font-extrabold text-3xl md:text-5xl mt-2">
              backed by AI.
            </h3>
            <p className="opacity-70">
              All the courses, units and steps are AI-generated, allowing us to
              keep producing new content fast. Cool right?
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-lg text-center text-white mt-8"
        >
          <TabletSmartphoneIcon size={48} />
          <h3 className="font-extrabold text-3xl md:text-5xl mt-2">
            never stop learning.
          </h3>
          <p className="opacity-70">
            We are mobile first, so you can learn web3 from your sofa or the
            toilet. Never stop learning!
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}
