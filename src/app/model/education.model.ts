import { Skill } from './skill.model';

export interface Education {
    institution: string;
    state: string;
    yearFinished: Date;
    degrees: Array<string>;
}

export interface Classes {
    title: string;
    skills?: Array<string>;
    category: string;
}