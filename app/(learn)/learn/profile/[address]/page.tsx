"use client";
import dynamic from "next/dynamic";

const ProfileContent = dynamic(
  () => import("@/components/learn-components/profile-content"),
  { ssr: false }
);

export default function ProfilePage({
  params,
}: {
  params: { address: string };
}) {
  return <ProfileContent params={params} />;
}
