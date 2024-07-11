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

export type {
    IAboutPartType,
    IExperincePartType
}