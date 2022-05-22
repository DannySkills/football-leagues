import React, { useState, useEffect, useCallback } from "react";
import { LeagueService } from "../services/league.service";
import { League } from "../interfaces/league";
import { Team } from "../interfaces/team";

const LeaguePreview = ({ league }: { league: League }) => {
  const [leagueTeams, setLeagueTeams] = useState<Team[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleTeams = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const fetchLeagueTeams = useCallback(async (): Promise<void> => {
    const data: Team[] = await LeagueService.getFootballTeams(league.strLeague);
    setLeagueTeams(data);
  }, [league.strLeague]);

  useEffect(() => {
    fetchLeagueTeams();
  }, [leagueTeams.length, fetchLeagueTeams]);

  return (
    <div className="preview-container">
      <div className="league-preview" onClick={toggleTeams}>
        <p>{league.strLeague}</p>
      </div>
      <>
        {isOpen && (
          <ul className="team-list clean-list flex col align-center">
            {leagueTeams.map((team) => (
              <li key={team.idTeam} className="flex">
                <p>{team.strTeam}</p>
                <img src={team.strTeamBadge} alt={team.strTeam} />
              </li>
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default LeaguePreview;
