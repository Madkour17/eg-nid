import { nidRegex, Result } from './constants'
import * as cities from './egCities.json'

/**
 * 
 * @param nid Egyptian national ID - 14 Digits
 * @returns Result object {age, city, sex, day, month, year, bd}
 */
export const egNid = (nid: string | number) => {
    const nidString = nid.toString()
    if (!validate(nidString)) return 'wrong NID format'

    const result: Result = {
        city: '',
        sex: 'Male',
        age: 0,
        day: 0,
        month: 0,
        year: 0,
        bd: ''
    }
    const millennium = getMillennium(nidString[0])
    const [year, month, day] = getBD(millennium, nidString.substring(1, 7))
    result.city = getCity(nidString.substring(7, 9))
    result.sex = getSex(nidString[12])
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


const getBD = (millennium: string, value: number | string) => {
    const valueFormatted = value.toString()
    const year: number = parseInt(millennium + valueFormatted.substring(0, 2), 10)
    const month: number = parseInt(valueFormatted.substring(2, 4), 10)
    const day: number = parseInt(valueFormatted.substring(4, 6), 10)
    return [year, month, day]
}

const getCity = (cityCode: string) => {
    // TODO: Refactoring 
    const city = JSON.parse(JSON.stringify(cities))[cityCode]
    return city
}

const getSex = (sexCode: string) => parseInt(sexCode, 10) % 2 === 0 ? 'Female' : 'Male'

const getAge = (birthDate: string): number => {
    // TODO: Make age live counter
    const currentDate: any = new Date()
    const dob: any = new Date(birthDate).getTime()
    const age: number = Math.floor((currentDate - dob) / 3.15576e+10)

    return age
}
