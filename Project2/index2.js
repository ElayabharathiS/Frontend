const input = document.getElementById("input");

function reverseString(str){
    return str.split("").reverse().join("");
}


function check(){
    
    const value =input.value.trim();
    const reverse = reverseString(value);

        if(value === reverse){
            alert("PALINDROME");
         }
        else{
            alert("NOT A PALINDROME");
        }

        input.value = "";
 }
