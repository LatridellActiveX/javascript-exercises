const palindromes = function (a) {
    let str = a.toLowerCase();
    let charray = str.split('');
    var charray2 = new Array(0);
    let arlength = charray.length;
    let pfound = true;
    var temp;
    var similarity = false;

    //remove punctuation
    do{
        
        for(let i = 0; i <= charray.length - 1; i++){
            switch(charray[i]){
                case ",":
                    pfound = true;
                    temp = charray.splice(i, 1);
                    break;
                case".":
                    pfound = true;
                    temp = charray.splice(i, 1);
                    break;
                case "!":
                    pfound = true;
                    temp = charray.splice(i, 1);
                    break;
                    case " ":
                        pfound = true;
                        temp = charray.splice(i, 1);
                        break;
                default:
                    if(i == charray.length - 1){
                        pfound = false;
                    }
                    break;

            }
        }

    }while(pfound);

    //now to reflect the array and then check if its a palindrome. 
    for(let k = charray.length-1; k >= 0; k--){
        charray2.push(charray[k]);
    }

    
    if(charray.length == charray2.length){
        for(let j = charray.length-1; j >= 0; j--){
            if(charray[j] == charray2[j]){
                similarity = true;
                
            }else{
                
                return false;
                
            }
        }
    }else{
        similarity =  false;
    }
    return similarity;
};



/*



convert string into array of chars
Identify uppercase characters and ignore their state, toLower?

In addition you need to omit spaces from the array. 

Omit punctuation in determination of palindrome
Three types of punctuation to omit, a comma, a punctuation mark
and a period. We can iterate through the array and delete them 
specifically, but how. 

Then we have a good array to copy


copy and 
reverse array of chars and see if it matches original array

We need to know how to iterate through an array and delete 
characters and spaces that we dont want in the array. 

Splice. 

iterate through the array and when we come across a comma, we
take note of the index of the comma and we at the end splice
out all the commas and the spaces. Heres the thing though, 
when we do that it changes the index of the items after we 
use splice so we have to do it multiple different times 
every time we come across a new item.

So the question is how do we restart the iteration every time we
use the splice command. With a new array on each go. 


returns true or false
*/





// Do not edit below this line
module.exports = palindromes;
