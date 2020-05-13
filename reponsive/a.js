// var array = [
//     1,
//     2,
//     3,
//     'a',
//     'b'
// ];
// array.unshift('dik');
// console.log(array);
function writeLog() {
    var param = '';
    for (var val of arguments) {
        param += `${val}    `;
    } 
    console.log(param.trim("-"));
}

writeLog(1,5,3,78,2,984,12);