let myArray = ["Hello", "world", 6, 2, 55, 2332, 3434];
const output = document.getElementById('output');
let html = myArray.map(function(value,index){
    console.log(value);
    console.log(index);
    return '<div>'+index+' '+value+'</div>';
})
let myStr = html.join('');
output.innerHTML = myStr;
console.log(myStr);
console.log(html);




















/*
output.innerHTML = "NEW";
console.dir(output);

let myArr2 = myArray.map(function(val){
   console.log(val);
   return typeof val; 
});

console.log(myArr2); 

let myNumbs = [32,5544,2332,55,3232,3232,322,33];
const newNumbs = myNumbs.map(function(x){
    return x * 3;
})
console.log(newNumbs );

const newNumbs2 = myNumbs.map(x => x * 3);
console.log(newNumbs2);*/