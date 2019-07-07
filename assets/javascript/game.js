$(document).ready(function() {
var win = 0;
var loss = 0;

var orderTot = Math.floor((Math.random()*120-19+1)+19);
$("#random").html(orderTot);

var custTot= 0;


var wooder =Math.floor((Math.random() * 12-1+1) + 1);
var pretzel=Math.floor((Math.random() * 12-1+1) + 1);
var tasty = Math.floor((Math.random() * 12-1+1) + 1);
var cheese=Math.floor((Math.random() * 12-1+1) + 1);

function startGame(){
    $("#pretzel").attr("data-value", pretzel);
    $("#tasty").attr("data-value", tasty);
    $("#wooder").attr("data-value", wooder);
    $("#cheese").attr("data-value", cheese);
    orderTot= Math.floor((Math.random()*120-19+1)+19);
    $("#random").html(orderTot);
    custTot= 0;
    $("#receipt").html(custTot);
    console.log(pretzel)
}

function reset() {
    wooder = Math.floor((Math.random() * 12-1+1) + 1);
    pretzel= Math.floor((Math.random() * 12-1+1) + 1);
    tasty = Math.floor((Math.random() * 12-1+1) + 1);
    cheese= Math.floor((Math.random() * 12-1+1) + 1);

}

startGame();


$(".menuitems").on("click", function(){
    var value=$(this).data().value;
    custTot=value+custTot;
    $("#receipt").html(custTot);
    $("#random").html(orderTot);
if (custTot===orderTot){
        
    alert("You win, your order is free!");
        win++;
        $("#wins").html(win);
        reset();
        startGame();
} else if (custTot> orderTot){
        loss++;
        $("#loss").html(loss);
        reset();
        startGame();
        alert("You lost! Hope you brought cash!");
    
}

     });
});


