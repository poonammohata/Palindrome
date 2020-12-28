var input = document.querySelector("#input");
var output = document.querySelector("#output");
var btn = document.querySelector("#btn");

function checkNum(num){
    if(isNaN(num)){
        return false
    }
    return true
}

function checkPalindrome(num) {
    var checkNum=num;
    var newNum=0;
    while(num>0){
        var remainder=num%10;
        num=parseInt(num/10);
        newNum=newNum*10+remainder;
    }
    if(checkNum==newNum){
        return true
    }
    return false
}

btn.addEventListener("click", function palindrome() {
    if (checkNum(input.value)) {
        if (checkPalindrome(input.value)) {
            output.innerText = input.value + " is a palindrome"
        } else {
            output.innerText = input.value + " is not a palindrome"
        }
    }
    else{
        output.innerText="enter a number"
    }

})