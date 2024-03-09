import { Team } from "./team.model";

export interface Hackathon {
    id: number;
    name: string;
    theme: string;
    registration_date_range: string;
    event_date: Date;
    challenge_titles: string;
    max_team_size: number;
    max_num_of_teams: number;
    registeredTeams?: Team[];
  }
  