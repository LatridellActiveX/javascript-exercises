const removeFromArray = function() {
    var Array1 = [];
    if(arguments.length >= 1){
        //this creates a local array to return eventually from argument 1
        Array1 = Array.from(arguments[0]);
        //this iterates through that local array
        for(j = 1; j < arguments.length; j++){
            //this iterates through the arguments past the array on argument 1
            for(i = 0; i < Array1.length; i++){
                if(arguments[j] === Array1[i]){
                    Array1.splice(i,1);
                }
            }
        }
    }
    return Array1;
    
};

// Do not edit below this line
module.exports = removeFromArray;
