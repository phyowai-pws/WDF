
// const myName = "Kyaw Kyaw";

// console.log(myName);


// function inchToFeet(input) {
//     return input / 12 + " ft";
// }

// console.log(inchToFeet(15));
// console.log(inchToFeet(50));
// console.log(inchToFeet(20));
// console.log(inchToFeet(30));

// /* apporve arr*/
// let arr = [];

// arr[0] = "aaa";
// arr[1] = "bbb";
// arr[6] = "ccc";
// arr[4] = "ddd";

// console.log(typeof arr);
// console.log(arr);
// console.log(arr.length)

// let arr = [];

// arr[arr.length]= "aaa";
// arr[arr.length]= "bbb";
// arr[arr.length]= "ccc";
// arr[arr.length]= "ddd";

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[arr.length-1]);

// let mySelf = {
//     name:"aung aung",
//     age: 25,
//     job: "IT",
//     address: "kamayut",
//     skill: ["html","css","js"],
// }

// console.log(typeof mySelf);
// console.log(mySelf);
// console.log(mySelf.name);
// console.log(mySelf.skill[2]);
// //----------
// console.log(mySelf["job"]);

// let obj ={};

// obj.a= "aaa";
// obj.b= "bbb";
// obj["c"]= "ccc";

// console.log(typeof obj);
// console.log(obj);


//problem 1

let name = "mg mg";
let age = 15;
let money = 200;

money -= 50;
// console.log(money);

let mgmgBag = ["mm","eng","bio",false];

let canMgMgSmoke = false;
let canMgMgFriendSmoke = true;

let mgmgObj = {
    name:"mg mg ",
    age,
    canMgMgSmoke : false,
    money,
    bag: mgmgBag,
}
let kyawkyawObj = {
    name:"kyaw kyaw",
    age : 17,
    cankyawkyawSmoke : true,
    money : 500,
    bag: ["mm"],
}
let myamyaObj = {
    name:"mya mya ",
    age : 18,
    canmyamyaSmoke : true,
    money : 1000,
    bag: ["mm","eng","bio"],
}

// console.log(mgmgObj);
// console.log(kyawkyawObj);
// console.log(myamyaObj);

let students = [
    {
        name:"mg mg ",
        age,
        canMgMgSmoke : false,
        money,
        bag: mgmgBag,
    },
    {
        name:"kyaw kyaw",
        age : 17,
        cankyawkyawSmoke : true,
        money : 500,
        bag: ["mm"],
    },
    {
        name:"mya mya ",
        age : 18,
        canmyamyaSmoke : true,
        money : 1000,
        bag: ["mm","eng","bio"],
    }
];

console.log(students);
console.log(students[0].name);
console.log(students[2].bag[2]);

