const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    var final = '';
    
    for(num; num > 0; num--){
        final = final.concat(string);
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
