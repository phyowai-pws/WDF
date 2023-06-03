
const fruits = [
    "apple","orange", "mango","banana", "lemon","coconut"

];

// for (fruit of fruits){
//     console.log(fruit);
// }

// for(index in fruits){
//     console.log(index, fruits[index]);
// }



// const mgmgInfo = {
//     name : "Mg Mg",
//     age : 18,
//     job : "student"
// }

// for(key in mgmgInfo){
//     console.log(key,":",mgmgInfo[key]);
// }

const ratings = [
    {
        id:1,
        name : "Mg Mg",
        rate : 3
    },
    {
        id:2,
        name : "Kyaw Kyaw",
        rate : 5
    },
    {
        id:3,
        name : "Aung Aung",
        rate : 4
    },
    {
        id:4,
        name : "Hla Hla",
        rate : 1
    },
    {
        id:5,
        name : "Mya Mya",
        rate : 2
    },
    {
        id:6,
        name : "mg mg",
        rate : 3
    }
    

];

for(rating of ratings){
    // console.log(rating.id,rating.name,rating.rate);
    for(key in rating){
        console.log(key, rating[key]);
    }
    console.log("- - - - - - - - ");
}
