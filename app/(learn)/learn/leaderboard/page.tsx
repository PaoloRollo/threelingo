"use client";
import LeaderboardProfile from "@/components/learn-components/leaderboard-profile";
import {useEffect, useState} from "react";
import {useUserStore} from "@/lib/store/user-store";
import {sliceAddress} from "@/lib/utils";

export default function Leaderboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const address = useUserStore((state) => state.address);
  const [leaderboard, setLeaderboard] = useState<{ address: string, xp: number }[]>([])
  useEffect(() => {
    if (leaderboard?.length === 0) {
      fetchLeaderboard();
    }
  }, [leaderboard]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const leaderboardRes = await fetch(`/api/leaderboard`)
      const leaderboardData = await leaderboardRes.json();
      setLeaderboard(leaderboardData)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return <section
      id="profile-page"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col"
  >
    {leaderboard?.length > 0 && leaderboard.map((leaderboardEntry, index) => {
      return <LeaderboardProfile key={index} place={index + 1} name={sliceAddress(leaderboardEntry.address)}
                                 xp={leaderboardEntry.xp}
                                 isCurrentUser={address.toLowerCase() === leaderboardEntry.address.toLowerCase()}></LeaderboardProfile>
    })}
  </section>;
}
