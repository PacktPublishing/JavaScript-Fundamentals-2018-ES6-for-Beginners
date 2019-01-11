let myArray = ["Hello", "world", 6, 2, 55, 2332, 3434];
const output = document.getElementById('output');
output.innerHTML = myArray.map((value, index) => '<div>' + index + ' ' + value + '</div>').join('');