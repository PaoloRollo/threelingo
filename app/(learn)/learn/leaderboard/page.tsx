import LeaderboardProfile from "@/components/learn-components/leaderboard-profile";

export default function Leaderboard() {
  return <section
      id="profile-page"
      className="py-24 px-8 max-w-3xl mx-auto flex flex-col"
  >
    <LeaderboardProfile place={1} name="limone.eth" xp={45} isCurrentUser={true}></LeaderboardProfile>
    <LeaderboardProfile place={2} name="orbulo.eth" xp={32} isCurrentUser={false}></LeaderboardProfile>
    <LeaderboardProfile place={3} name="frankc.eth" xp={10} isCurrentUser={false}></LeaderboardProfile>
    <LeaderboardProfile place={4} name="cryptogallo.eth" xp={10} isCurrentUser={false}></LeaderboardProfile>
  </section>;
}
