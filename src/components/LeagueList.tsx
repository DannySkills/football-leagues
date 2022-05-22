import React from "react";
import LeaguePreview from "./LeaguePreview";
import { League } from "../interfaces/league";

const LeagueList = ({ leagues }: { leagues: League[] }) => {
  return (
    <div className="container">
      {leagues.map((league) => (
        <LeaguePreview league={league} key={league.idLeague} />
      ))}
    </div>
  );
};

export default LeagueList;
