$(document).ready(function() {

    var firstNumber = $("#first-number");
    var secondNumber = $("#second-number");
    var operator = "";

    $(".number").on("click", function() {
        if (operator == ""){
            firstNumber.append(this.value);
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
        $("#result").append();
    });
    
});