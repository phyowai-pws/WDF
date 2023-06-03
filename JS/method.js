
const mySelf = {
    //properties
    name : "Kyaw Kyaw",
    age : 28,
    isSingle : true,

    //method
    teach : function(what,where){
        return "I can teach " + what+ " at " + where;
    },

    //method ES6
    learn(anything="anything"){
        return `${this.name} can learn  ${this.anything}`;
    },

    showThis: function(){
        // console.log(this.name,this.age,this.learn())
        console.log(mySelf)
    }


}
    
console.log(mySelf.showThis())

// console.log(mySelf.teach("frontend Dev" , "MMS IT"));
// console.log(mySelf.learn("programming"));


// console.log(mySelf);
