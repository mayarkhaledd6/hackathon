import { Team } from "./team.model";

export interface Hackathon {
    id: number;
    name: string;
    theme: string;
    registrationDateRange: string;
    eventDate: string;
    challenges: string[];
    maxTeamSize: number;
    maxNumberOfTeams: number;
    registeredTeams?: Team[];
  }
  