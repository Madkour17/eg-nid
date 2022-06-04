import { egNid } from ".."

describe("Testing index.js", () => {

    test('Testing empty NID', () => {
        expect(egNid('')).toMatch('wrong NID format')
    })
    test('Testing wrong NID', () => {
        const result = egNid('3001253')
        expect(result).toMatch('wrong NID format')
    })
    test('Testing correct Male NID', () => {
        const result = egNid('29208150201314')
        expect(result).toEqual({
            city: 'Alexandria',
            sex: 'Male',
            age: 29,
            day: 15,
            month: 8,
            year: 1992,
            bd: '15-8-1992'
        })
    })

    test('Testing correct Female NID', () => {
        const result = egNid('29208150201384')
        expect(result).toEqual({
            city: 'Alexandria',
            sex: 'Female',
            age: 29,
            day: 15,
            month: 8,
            year: 1992,
            bd: '15-8-1992'
        })
    })

    test('Testing 3rd millennium NID', () => {
        const result = egNid('30510230201344')
        expect(result).toEqual({
            city: 'Alexandria',
            sex: 'Female',
            age: 16,
            day: 23,
            month: 10,
            year: 2005,
            bd: '23-10-2005'
        })
    })

})
