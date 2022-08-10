const fibonacci = function(i) {

    var temp1;
    var temp2;
    var temp3;



    if(i <= 0){
        return "OOPS";
    }else if(i < 3){
        return 1;
    }else if(i == 3){
        return 2;
    }else{
        temp1 = 1;
        temp2 = 2;

        for(var j = 4; j <= i; j++){
            temp3 = temp2 + temp1;
            if(j == i){
                return temp3;
            }else{
                temp1 = temp2;
                temp2 = temp3;
            }

        }

    }


};


console.log(fibonacci(25))


// Do not edit below this line
module.exports = fibonacci;
