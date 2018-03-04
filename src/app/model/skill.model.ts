export interface Skill {
    label: string;
    examples: string;
    projects: Array<Project>;
    category: string;
    isTech: boolean;
    proficiencyRating: number;
}

export interface Project {
    title: string;
    content: string;
    skills: Array<string>;
}