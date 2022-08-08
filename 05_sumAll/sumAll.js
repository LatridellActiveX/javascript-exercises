const sumAll = function(firstInt, secondInt) {
    var larger;
    var smaller;
    var sum = 0;
    console.log("Starting function");

    if(arguments.length === 0){
        return "ERROR";

    }else if(typeof(firstInt) != "number" || typeof(secondInt) != "number"){
        return "ERROR";

    }else if(firstInt < 0 || secondInt < 0){
        return "ERROR";

    }else if(secondInt < firstInt){
        smaller = secondInt;
        larger = firstInt;

        for(smaller; smaller <= larger; smaller++){
            sum += smaller;
        }

        return sum;

    }else{
        smaller = firstInt;
        larger = secondInt;

        for(smaller; smaller <= larger; smaller++){
            sum += smaller;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
