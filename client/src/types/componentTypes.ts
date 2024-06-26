type IExperience = {
    type: "workplace" | "remote" | "freelancer"
}

interface ExperienceType extends IExperience {
    name: string,
    link?: string,
    date: string,
    position: string
    description: string

}

type ILevel = {
    level: "a1" | "a2" | "b1" | "b2" | "c1" | "c2" | "beginner" | "intermediate" | "advanced" | "native"
}
interface LanguageType extends ILevel {
    name: string
}

interface EducationType {
    name: string,
    date: string,
    description: string
}

interface ProjectType {
    name: string,
    description: string,
    badges?: string[] | any[],
    link?: string | any
}

interface SkillsType {
    skills: string[] | any[]
}

interface AboutType {
    text: string
}

export type {
    ExperienceType,
    LanguageType,
    EducationType,
    ProjectType,
    SkillsType,
    AboutType
}