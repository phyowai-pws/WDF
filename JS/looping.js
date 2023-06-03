
// for(let i= 1; i <=5; i++){
//     if(i === 3) continue;
//     console.log(i,"=======")
// }


// const letters = ["a","b","c","d","e","f"];

// for( let i = 0; i < letters.length ; i++ ){
//     console.log("index" ,i,"===",letters[i] )
// }   


// const marks = [55,60,75,80,90,93];
// let totalMark = 0;

// for( let mark=0 ; mark < marks.length ; mark++ ){
//       console.log(marks[mark])
//       totalMark += marks[mark];
// }
// console.log("Total : ", totalMark)

//==================================
// const mgmgInfo = {
//     name : "mg mg ",
//     age : 16,
//     marks : [
//         {
//             id : 1,
//             subject : "Myanmar",
//             mark : 55
//         },
//         {
//             id : 2,
//             subject : "English",
//             mark : 30
//         },
//         {
//             id : 3,
//             subject : "Math",
//             mark : 75
//         },
//         {
//             id : 4,
//             subject : "Chem",
//             mark : 35
//         },
//         {
//             id : 5,
//             subject : "Phy",
//             mark :90
//         },
//         {
//             id : 6,
//             subject : "Bio",
//             mark : 93
//         }
//     ]
// }

// //အခန်းသစ်ထပ်ထည့်
// mgmgInfo.totalMark = 0;
// mgmgInfo.results = {};

// for(let i=0; i < mgmgInfo.marks.length; i++){
//     console.log(mgmgInfo.marks[i].mark);
//     //totalmark 
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
//     //pass or fail
//     // mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "success" : "fail";
//     if(mgmgInfo.marks[i].mark >= 40){
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "success";   
//     }else{
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "fail";
//     }
// }


// console.log(mgmgInfo);
// // console.log(mgmgInfo.marks[2].mark);

//=============================
// let wakeUpTime = 7;
// if (wakeUpTime <= 8) {
//     console.log("wakeup");
// }else{
//     console.log("အရိုက်ခံရမယ်");
// }

// let pocketMoney = 100;

// if(pocketMoney >=200){
//     console.log("can take bus");
// }else{
//     console.log("walk");
// }


// function starGenerator(count,element="*"){
//     let star = "";
//     for(let i=1; i<=count; i++){
//         star += element;
//     }
//     return star;
// }
// console.log(starGenerator(4));

// for(let i= 1; i<=6; i++){
    
//     console.log(starGenerator(i,"* "));
// }

// for(let i=6; i>=1;i--){
    
//     console.log(starGenerator(i,"= "));
// }

//even & odd

// for(let i =1; i<=6 ; i++){
//     // console.log(starGenerator(i, i%2 === 0 ? "= ":"* "));
//     if(i%2 === 0){
//         console.log(starGenerator(i, "= "));
//     }else{
//         console.log(starGenerator(i,"* "));
//     }
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

for(let i=0; i<ratings.length; i++){
    let result = "";
    for(let x=1; x<=5; x++){
        if(x <= ratings[i].rate){
            result += "* "
        }else{
            result += "- "
        }
    }
    console.log(result,ratings[i].name);
}

// for(let i=1; i<=5;i++){
//     let result = "";
//     for(let x=1;x<=5;x++){
//         // if(x <= i){
//         //     result += "* "
//         // }else {
//         //     result += "- "
//         // }
//         result += x<=i ? "* ":  "= "
//     }
//     console.log(result);
// }

