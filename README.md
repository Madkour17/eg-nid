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

# Contact me

[![name](https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg)](https://www.linkedin.com/in/madkour7/)
[![name](https://user-images.githubusercontent.com/45951682/159041452-0cd5ee66-8403-4847-9ba7-090fed7e1dba.png)](https://www.madkour17.com)
