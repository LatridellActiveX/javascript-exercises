    const getTheTitles = function(ob) {
        var array1 = new Array(0);
        var len = Object.keys(ob).length;



         for(var j = 0; j < len; j++){
            array1.push(ob[j].title);
        }

        return array1;
};

//Working function


// Do not edit below this line
module.exports = getTheTitles;
