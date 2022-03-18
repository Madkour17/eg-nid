# eg-nid

Extract basic info from Egyptian NIDs

    - City
    - Age
    - Sex
    - day
    - Month
    - Year
    - Birthday



# Installation

## npm

    npm i eg-nid

## yarn

    yarn add eg-nid

# Usage

```javascript
const { egNid } = require('eg-nid');
```

# Example

```javascript
const personalInfo = egNid('# EGYPTIAN NID HERE #')

console.log(personalInfo)

//  {
//   city: 'Alexandria',
//   sex: 'Male',
//   age: 29,
//   day: 14,
//   month: 03,
//   year: 1992,
//   bd: '14-03-1992'
// }
```
