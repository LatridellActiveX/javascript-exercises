


const caesar = function(string1,shift) {


    var lowerA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var upperA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    var iteration = shift;
    var thing = string1;


    //
    let charray = thing.split('');
    //console.log("Character array is: " + charray);
    //console.log("array length is: " + charray.length);

    //both upper and lower arrays start at index 0 and go to index 25, we need functionality that when the shift reaches 25 it goes back to 0 and continues. 
    //We also need a way to check if the character is uppercase or lowercase. We will probably be using the splice array function for this so we need to be prepared. 
    //We also need to be able to reverse shift the characters. 
    //so basically to check if the character is uppercase we need to copy the character, change it to uppercase, then strict check if the characters are the same. 
    //the input is a string. The output should also be a string. we will use array.join(); for that, which after a big misconception, ends up working just fine. 
    //now the question of iterating through the array of characters. We need an indexing algorithm that identifies where in the array the specified character is, then 
    //figures out which index in the array to go to, then splices that character into the spot. 
    //I probably didnt need an entire array of uppercase letters but then again Im going for whatever works not practical code. 

    //Psuedocode after this line

    //is a letter and not punctuation
    var isLetter;

    //the index of the character in the array built from the string
    var chindex;

    //the matching index in the alphabet array, will be the one being shifted over and over again until it reaches the shiftEndIndex
    var arrIndex;

    //the character if it is indeed a letter
    var char;

    //the true or false determining if it is uppercase
    var isUpper;

    //the specifier of which alphabet to use
    var arrayToUse;

    //the true or false to determine how long to go until the end of the shift math
    var iterationNotReached;

    //The index of the letter that the shift resulted in
    var shiftEndChar;

    //the current count of the shift
    var shiftCount = iteration;

    //iteration through the array of characters we created using the iterator variable len.  
    for(var len = 0; len < charray.length; len++){
        //console.log("charray length: " + charray.length);
        //console.log("Char num in array: " + len);  
        switch(charray[len]){
            case ",":
                isLetter = false;
                break;
            case " ":
                isLetter = false;
                break;
            case "!":
                isLetter = false;
                break;
            default:
                //console.log("Current char is a letter");
                isLetter = true;
                break;
        }
        //End of punctuation and space checking

        //if it is a letter at this index we need to perform a shift and splice. 
        if(isLetter){
            //storing the index of this character
            chindex = len;
            //storing the character to be checked for capitalization
            char = charray[len];
            //checking to see if it is capitalized.
           //console.log("Starting cap check");
            //console.log("Current index:" + len);
            //console.log("Char at index" + len + " is: " + charray[len]);
            if((charray[len].toUpperCase()) == char){
                //uppercase
                //console.log("char is uppercase");
                arrayToUse = upperA;
                //crosscheck the character with the array specified
            }else{
                //not uppercase
                //console.log("char is not uppercase");
                arrayToUse = lowerA;           
            }
            //crossreferencing letter with array
            //console.log("Crossreferencing letter with array");
            for(var i = 0; i < arrayToUse.length; i++){
                if(char == arrayToUse[i]){
                    arrIndex = i;
                    //console.log("Char has been determined to be: " + arrayToUse[i] + " in the crossreferenced array");
                }

            }
            //console.log("Perparing to determine shift count. ");
            //now we have the index in the array to base the shift off of, now we need to determine if it is a backwards or forwards shift. 

            //backwards shift, need to double check if this thing works. 
            if(shiftCount < 0){
                for(var j = shiftCount; j < 0; j++){
                    //start at arrIndex and work backwards
                    //check if its at index 0 in the alphabet array, if so set it to 25, else -- it. 
                    if(arrIndex == 0){
                        arrIndex = 25;
                    }else{
                        arrIndex --;
                    }
                    
                }
            //forwards shift
            }else{
                for(var j = 1; j <= shiftCount; j++){
                    if(arrIndex == 25){
                        arrIndex = 0;
                    }else{
                        arrIndex++;
                    }
                    //check if it is at arrIndex 25 and if so set it to 0 and then continue
                    //start at arrindex
    
    
                    //end at shiftEndIndex;
                }
            }
            

            //shift is over, we should now set the letter to be spliced as the arrIndex.
            shiftEndChar = arrayToUse[arrIndex];

            //Now we need to perform the splice properly, fucking easiest shit in the world.  
            //console.log("shift ending character: " + shiftEndChar);
            //console.log("len at this point is: " + len)
            //console.log("value to be stored in index of array is " + arrayToUse[arrIndex]);
            charray[len] = arrayToUse[arrIndex];
        

        // end of is letter control flow
        //console.log("end of letter control flow");
        }
                
              
        //end of for loop for looping through characters in the char array we built from the string
        }
        //console.log("Made it to the end of the function");
        //console.log("new array" + charray);
        return charray.join('');
        


    }

    //iterate through each character in the charray and perform the shift for each one. 
 

    //identify whether or not the character is uppercase, if so upperA will be used so we need a variable that specifies that.  

    //We need to store the current index of the character in this array so that the splice will work

    //we need to iterate through the entire cipher array to find a match, then index where in the array that is to then perform a shift

    //algorithm that calculates the ending index of the shift. 
        //lets say the shift is 5 and the character is in index 23.

        //we need to implement both forward and reversing shifts of any range from 1 - 1000
        //a while loop would probably be best for this we keep track of the current iteration until we reach the final iteration
        //the while loop keeps going through the alphabet until it reaches the final letter, the splices it in. 
        //should end on index 1. How the fuck do we accomplish that. 
        //index of the current character
        //when it reaches 25, find the remainder and start from 0.

    //algorithm that replaces the character with the new one. 



    //algorithm to join the characters back into a string


// Do not edit below this line

//console.log("Should be 'Ebiil, Tloia!': \n" + caesar('Hello, World!', -29));

module.exports = caesar;
