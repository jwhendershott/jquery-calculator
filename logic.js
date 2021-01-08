$(document).ready(function() {

    $(".number").on("click", function() {
        $("#first-number").text(this.value);
    });
    
    $(".operator").on("click", function() {
        $("#operator").text(this.children[0].innerHTML);
    });

    $(".number").on("click", function() {
        $("#second-number").text(this.value);
    });
    
});