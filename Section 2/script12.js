let myArray = ["Hello", "World", 50, false];
console.log(myArray[0] + " " + myArray[1]);
myArray[myArray.length] = "New item";
myArray.push("At the end");
let firstone = myArray.shift();
console.log(firstone);
myArray.unshift("New one at the start");
let res = myArray.slice(3);
myArray[3] = true;
console.log(res);
let myStr = myArray.toString();
let myArray2 = myStr.split(',');
let myArray3 = myArray.join(' - ');
console.log(myStr);
console.log(myArray2);
console.log(myArray3);
/*
let rep = myArray.splice(3,2,"One","Two");
console.log(rep);*/
//delete myArray[3];
/*let lastone = myArray.pop();
console.log(lastone);*/
console.log(myArray);