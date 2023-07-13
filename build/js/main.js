"use strict";
let username = 'Folashade Omoloja';
console.log(username);
let a = 12;
let b = 6;
let c = 2;
//lesson 2
let myName;
let meaningOfLife;
let isLoading;
let album;
myName = 'Fred';
const sum = (a, b) => {
    return a + b;
};
let union;
union = 10;
union = 'traffic';
let goCart;
let re = /\w+/g;
//lesson 3
let stringArr = ['test', 'go', 'come'];
let stringAndNumber = ['lol', 3, 'bye'];
let mixedData = ['lol', 2, true];
let anyArr = [];
let stringEmptyArr = [];
let mixedEmptyArr = [];
//tuple
let myTuple = ['go', 2, true];
mixedData = myTuple;
myTuple[1] = 3;
//the ? in tuple makes it optional
let sampleObj = {
    name: "Jimmy",
    number: 0,
    boolean: false,
    mixedArr: [true, false, 2, 'hi'],
    mixedInput: "",
    tuple: ['', true]
};
let secondSampleObj = {
    name: "John Bellion",
    number: 0,
    boolean: false,
    mixedArr: [],
    mixedInput: ""
};
let thirdSampleObj = {
    number: 0,
    boolean: false,
    mixedArr: [],
    mixedInput: ""
};
const objFunction = (guitarist) => {
    return `Hello guitarist ${guitarist.name}`;
};
const objSecFunction = (guitarist) => {
    if (guitarist.name) {
        return `Hello guitarist ${guitarist.name.toUpperCase}`;
    }
    return `Hello!`;
};
console.log(objFunction(secondSampleObj));
console.log(objSecFunction(thirdSampleObj));
let thirdSam = {
    albumName: "",
    albumYear: 0,
    albumOnTopChart: false,
    albumFeatures: ['hi']
};
//Enums
//An enum is a special "class" that represents a group of constants (unchangeable variables). Enums come in two flavors string and numeric .
var EnumExample;
(function (EnumExample) {
    EnumExample[EnumExample["a"] = 0] = "a";
    EnumExample[EnumExample["b"] = 1] = "b";
    EnumExample[EnumExample["c"] = 2] = "c";
    EnumExample[EnumExample["d"] = 3] = "d";
})(EnumExample || (EnumExample = {}));
console.log(EnumExample.a);
