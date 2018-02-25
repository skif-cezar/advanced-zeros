module.exports = function getZerosCount(number, base) {
  // your implementation
var arr = [];
var f = 2;
while(f <= base){
    if(base%f == 0){
        arr = base;
        base = Math.round(base/f);
    }else {
        f++;
    }
}
var res = 0;
for (var i = 1; i < 12; i++){
    var num = Math.floor(number/Math.pow(arr, i))
    res += num;
}
return res;
}
