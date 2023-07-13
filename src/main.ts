let username= 'Folashade Omoloja'
console.log(username)

let a: number =12
let b: number = 6
let c: number = 2

//lesson 2

let myName: string
let meaningOfLife: number
let isLoading: boolean
let album: any
myName = 'Fred'

const sum = (a:number, b: string) =>{
    return a + b
}

let union: string | number
union = 10
union = 'traffic'

let goCart: number| boolean | string
let re: RegExp = /\w+/g

//lesson 3
let stringArr = ['test', 'go', 'come']
let stringAndNumber = ['lol', 3, 'bye']
let mixedData = ['lol', 2, true]
let anyArr = []
let stringEmptyArr: string[] = []
let mixedEmptyArr: (string| number| boolean)[] = []

//tuple
let myTuple: [string,number,boolean] = ['go', 2, true]
mixedData = myTuple
myTuple[1] = 3

//objects
//we can define a type

type Guitarist = {
    name?: string,
    number: number,
    boolean: boolean,
    mixedArr: (string| number | boolean)[],
    mixedInput: string | number,
    tuple?: [string,boolean]
}

//the ? in tuple makes it optional

let sampleObj: Guitarist = {
    name: "Jimmy",
    number: 0,
    boolean: false,
    mixedArr: [true, false,2, 'hi'],
    mixedInput: "",
    tuple: ['',true]
}

let secondSampleObj: Guitarist = {
    name: "John Bellion",
    number: 0,
    boolean: false,
    mixedArr: [],
    mixedInput: ""
}

let thirdSampleObj: Guitarist = {
    number: 0,
    boolean: false,
    mixedArr: [],
    mixedInput: ""
}

const objFunction = (guitarist: Guitarist) => {
    return `Hello guitarist ${guitarist.name}`
}

const objSecFunction = (guitarist: Guitarist) => {
if(guitarist.name){
    return `Hello guitarist ${guitarist.name.toUpperCase}`
}
return `Hello!`
}

console.log(objFunction(secondSampleObj))
console.log(objSecFunction(thirdSampleObj))

//you can use interface instead of type

interface Album {
albumName: string,
albumYear: number,
albumOnTopChart: boolean,
albumFeatures: string[]
}

let thirdSam: Album = {
    albumName: "",
    albumYear: 0,
    albumOnTopChart: false,
    albumFeatures: ['hi']
}
//Enums
//An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric .

enum EnumExample {
a,
b,
c,
d
}

console.log(EnumExample.a)


