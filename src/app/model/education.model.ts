import { Skill } from "./skill..model";

export interface Education {
    institution: string;
    state: string;
    startYear: Date;
    endYear: Date;
    degree: Array<string>;
}

export interface Classes {
    title: string;
    skills: Array<Skill>;
    category: string;
}