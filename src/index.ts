import { cities } from './egCities'

const nidRegex: RegExp = new RegExp('(2|3)[0-9][1-9][0-1][1-9][0-3][1-9]')

type NID = {
    age: number
    city: string
    sex: 'Male' | 'Female'
    day: number
    month: number
    year: number
    bd: string
}

type Result = NID | 'Wrong NID'
/**
 * 
 * @param nid String Egyptian national ID - 14 Digits
 * @returns NID object {age, city, sex, day, month, year, bd}
 */
export function egNid(nid: string): NID;
export function egNid(nid: string): Result {
    if (!nid || !validate(nid)) return 'Wrong NID'
    const result: NID = {
        city: '',
        sex: 'Male',
        age: 0,
        day: 0,
        month: 0,
        year: 0,
        bd: ''
    }
    const millennium = getMillennium(nid[0])
    const [year, month, day] = getBD(millennium, nid.substring(1, 7))
    result.city = getCity(nid.substring(7, 9))
    result.sex = getSex(nid[12])
    result.age = getAge(`${year}-${month}-${day}`)
    result.bd = `${day}-${month}-${year}`
    return {
        ...result, year, month, day
    }
}

const getMillennium = (value: string) => value === '2' ? '19' : '20'

const validate = (nid: string) => {
    if (!nidRegex.test(nid) || nid.length !== 14) {
        return false
    }
    return true
}


const getBD = (millennium: string, value: string) => {
    const year: number = parseInt(millennium + value.substring(0, 2), 10)
    const month: number = parseInt(value.substring(2, 4), 10)
    const day: number = parseInt(value.substring(4, 6), 10)
    return [year, month, day]
}

const getCity = (cityCode: string) => cities[cityCode]

const getSex = (sexCode: string) => parseInt(sexCode, 10) % 2 === 0 ? 'Female' : 'Male'

const getAge = (birthDate: string): number => {
    // TODO: Make age live counter
    const currentDate: any = new Date()
    const dob: any = new Date(birthDate).getTime()
    const age: number = Math.floor((currentDate - dob) / 3.15576e+10)

    return age
}
