export type paperOptinValue=number;
export type paperId=number;
export interface paperOption{
    name: string,
    value: paperOptinValue
}
export interface paperItem{
    id: paperId,
    title: string,
    desc?: string,
    icon: string,
    time: number,
    select?: {
        min: number,
        max: number,
        items: paperOption[]
    }
}
export interface categoryItem{
    category: string,
    papers: paperItem[]
}

export type paperListResponse=categoryItem[]

export interface paperRequest{
    id: number
    select: paperOptinValue[]
}
export interface problemItem{
    desc: string,
    choices: string[]
}