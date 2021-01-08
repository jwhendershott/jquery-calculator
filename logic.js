$(document).ready(function() {

    var firstNumber = $("#first-number");
    var secondNumber = $("#second-number");
    var operator = "";
    var firstNumInt = parseInt(firstNumber.text());
    var secNumInt = parseInt(secondNumber.text());

    $(".number").on("click", function() {
        if (operator == ""){
            firstNumber.append(this.value);
            console.log(parseInt(firstNumber.text()));
        }
        else {
            secondNumber.append(this.value);
        }
    });
    
    $(".operator").on("click", function() {
        operator = $("#operator").text(this.children[0].innerHTML);
    });

    $(".equal").on("click", function (){
        //$("#result").text(this.children[0].innerHTML);

        

        //$("#result").(result);
    });

});