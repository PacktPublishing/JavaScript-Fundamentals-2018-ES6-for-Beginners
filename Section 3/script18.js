let myFun3 = (x = 10) => x * 10;
var myFun4 = function myFun4() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    return x * 10;
};
let myFun1 = function (x = 10) {
    return x * 10;
}

function myFun2(x = 10) {
    return x * 10;
}