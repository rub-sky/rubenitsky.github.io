export interface Skill {
    label: string;
    examples?: string;
    projects?: Array<Project>;
    category: string;
    proficiencyRating: number;
}

export interface Project {
    title: string;
    content: string;
    skills: Array<string>;
}