//type aliases

type stringOrNumber = string | number
type mixedTypeArr = (string | number | boolean)[]

type Guitarists = {
    name?: string,
    number: number,
    boolean: boolean,
    mixedArr: mixedTypeArr,
    mixedInput: stringOrNumber,
    tuple?: [string,boolean]
}

//literal types is just like const, you cant redeclare it

let myUsername: 'Shades'
myUsername = 'Shades'

let allUserAdmin: 'Shade' | 'Evelyn' | 'Jane' | typeof myUsername
allUserAdmin = 'Shade'
allUserAdmin = myUsername
console.log(allUserAdmin)

//Functions


