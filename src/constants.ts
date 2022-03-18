export const nidRegex: RegExp = new RegExp('(2|3)[0-9][1-9][0-1][1-9][0-3][1-9]')

export type Result = {
    age: number
    city: string
    sex: 'Male' | 'Female'
    day: number
    month: number
    year: number
    bd: string
}