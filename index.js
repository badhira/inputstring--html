
function printString(){
  let sentence = document.getElementById("sentence").value
  let letter = document.getElementById("letter").value
  var letterNumber = /^[0-9@#\$%\^\&*\)\(+=_-]+$/;
  // If x is Not a Number or less than one or greater than 10
   if(letter.match(letterNumber)) {
   
    document.getElementById("result").value = '!!The numbers and special characters are not allowed!!';
    return false;
  // check the letter from user present in the sentance.
   }else if(sentence.includes(letter)){
    let str2 = sentence.substring(sentence.indexOf(letter) + 1); 
    //print the substring after the letter
    document.getElementById("result").value = str2;  
    } 
    //print not present
      else{
        document.getElementById("result").value = '!!The letter does not exist in the sentance!!';
    
      }
    
  
  }


// function to clear the form

function clearStr(){
    document.getElementById('sentence').value = '';
    document.getElementById('letter').value = '';
    document.getElementById('result').value = '';
  }


  