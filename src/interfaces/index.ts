export type Status = 'good' | 'bad' | 'normal'
export interface Data {
    id: number
    content: string
    status: Status
}
