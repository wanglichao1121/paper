export interface surveyItem{
    id: string,
    name: string
}
export interface problemItem{
    desc: string,
    choices: string[]
}
export async function fetchSurveyList(): Promise<surveyItem[]>{
    return [{
        id: "basic",
        name: "基础题库"
    },{
        id: "history",
        name: "泰拉历史"
    }
    ]
}
export async function fetchSurveyContent(id:string): Promise<problemItem[]>{
    return [{
        desc: "1+1=?",
        choices: ["1","2","3","4"]
    },{
        desc: "1+2=?",
        choices: ["5","2","3","4"]
    }]
}