const findTheOldest = function(people) {

    var yod;
    var yob;
    var age;
    var index;

    /* First I need an algorithm that iterates through the 
    three birthyears and finds the least one, all while storing
    the index of the object that has the least birthyear value */

    //iterates three times
    for(var j = 0; j < 3; j++){
        if(people[j].yearOfDeath === undefined){
            yob = people[j].yearOfBirth;
            yod = 2022;
            
            //Checks to see if it is the last in the series
            if(j == 2){
                //checks to see if it is the oldest age
                if(age < (yod - yob)){
                    index = j;
                }
            //if it is the first in the series
            }else if(j == 0){
                age = yod - yob;
                index = j;
            //if its the second in the series
            }else{
                if(age < (yod - yob)){
                    index = j;
                }
            }
            
            
            console.log("Our undefined checker worked motherfucker");
            
        }
        //if it is the first in the series and has a deathdate
        else if(j == 0){
            yob = people[j].yearOfBirth;
            yod = people[j].yearOfDeath;
            age = yod - yob;
            index = j;
        
        //if it is not the first in the series and has a deathdate
        }else if(age < (people[j].yearOfDeath - people[j].yearOfBirth)){
            age = people[j].yearOfDeath - people[j].yearOfBirth;
            index = j;
        }
        
    }
    return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
