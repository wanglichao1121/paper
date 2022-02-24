import { paperListResponse } from "@/interface/paper";

const BASE_URL='http://127.0.0.1:4523/mock/581392/'

export async function fetchPaperList(): Promise<paperListResponse>{
    const paperListPath='paper-list.php'
    const res=await fetch(BASE_URL+paperListPath)
    if(res.ok===false)
        throw new Error("连接异常")
    const content=await res.json();
    return content;
}