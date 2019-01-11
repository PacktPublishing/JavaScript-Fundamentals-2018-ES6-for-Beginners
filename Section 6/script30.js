let testMap = new Map();
testMap.set('first','Laurence');
testMap.set('last','Svekis');
testMap.set('age',40);
console.log(testMap);
console.log(testMap.get('first'));
testMap.set('first','John');
console.log(testMap.get('first'));
for(let k of testMap.keys()){
    console.log(k);   
}
for(let v of testMap.values()){
    console.log(v);   
}
for(let v of testMap){
    console.log(v);   
}
for(let [k,v] of testMap){
    console.log(k);
    console.log(v);
}
console.log(testMap.size);
console.log(testMap.keys());
console.log(testMap.values());





