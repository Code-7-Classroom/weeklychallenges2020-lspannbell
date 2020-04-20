 var str = "the quick brown fox juumps over the calm kitten quietly";

 for (var i = 0; i < str.length; i++ ){
     if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
         console.log(str.charAt(i));
         break;
     }
 }

 var strOne = "this hat is the gratest";

 for (var i = 0; i < strOne.length; i++ ){
     if (strOne.indexOf(strOne.charAt(i)) == strOne.lastIndexOf(strOne.charAt(i))){
         console.log(strOne.charAt(i));
         break;
     }
 }

 var strTwo = "what a wonderful day it has been";

 for (var i = 0; i < strTwo.length; i++ ){
     if (strTwo.indexOf(strTwo.charAt(i)) == strTwo.lastIndexOf(strTwo.charAt(i))){
         console.log(strTwo.charAt(i));
         break;
     }
 }