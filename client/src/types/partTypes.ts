interface IAboutPartType {
    languageName: string,
    languageLevel: string
}
interface IExperincePartType {
    name: string, 
    type: string, 
    link: string, 
    date: Date | string | any, 
    position: string,
    description: string
}

interface IHeadPartType {
    displayName:string,
    description:string,
    location:string,
    type: string,
    uri: string,
}

interface IEducationPartType {
    name: string, 
    date: Date | string | any, 
    description: string
}

interface IProjectPartType {
    name: string, 
    description: string, 
    link: string, 
    badges: string[] | any[],
    badgeName: string
}

export type {
    IAboutPartType,
    IExperincePartType,
    IHeadPartType,
    IEducationPartType,
    IProjectPartType
}