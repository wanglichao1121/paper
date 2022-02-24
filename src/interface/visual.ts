export interface circle {
    x: number,
    y: number,
    r: number
    w: number
}
export interface bez {
    p1: circle,
    p2: circle,
    p3: circle,
    p4: circle
}