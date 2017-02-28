
var y = 5;

var x = function(){
    return y;
};

var z = function(t){
    var y = 10;
    return t();
}

console.log(z(x));

