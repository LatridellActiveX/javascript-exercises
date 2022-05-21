const removeFromArray = function() {
    var Array1 = [];
    if(arguments.length >= 1){
        Array1 = Array.from(arguments[0]);
        for(i = 1; i < Array1.length; i++){
            console.log(i);
            for(j = 1; j < arguments.length; j++){
                
            }
        }
    }else{
        console.log("There are no arguments in the function");
    }

};

removeFromArray([1,2,3,4,5]);


// Do not edit below this line
//module.exports = removeFromArray;
