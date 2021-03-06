import axios, { AxiosResponse } from "axios";
import { Team } from "../interfaces/team";
import { League } from "../interfaces/league";

const getFootballLeagues = async (): Promise<League[]> => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php"
    );
    const leagues: League[] = data.leagues.splice(0, 5);
    return leagues;
  } catch (err) {
    throw err;
  }
};

const getFootballTeams = async (leagueName: string): Promise<Team[]> => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueName}`
    );
    const teams: Team[] = data.teams;
    return teams;
  } catch (err) {
    throw err;
  }
};

export const LeagueService = {
  getFootballLeagues,
  getFootballTeams,
};
