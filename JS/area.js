
let records = [];

function clacArea(width,breadth) {
    let area = width* breadth;
    const recordObject = {
        width : width +"ft",
        breadth : breadth + "ft",
        area : area +"sqft",
    }
    records[records.length]= recordObject;
    return area+"sqft";
}

console.log(clacArea(20,60));
console.log(clacArea(40,60));
console.log(clacArea(15,60));

console.table(records);


