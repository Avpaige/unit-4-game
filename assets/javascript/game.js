var win = 0;
var loss = 0;

var orderTot = Math.floor((Math.random()*120)+19);
$("#random").html(orderTot);

var custTot= 0;

var wooder =Math.floor((Math.random() * 12) + 1);
var pretzel=Math.floor((Math.random() * 12) + 1);
var tasty = Math.floor((Math.random() * 12) + 1);
var cheese=Math.floor((Math.random() * 12) + 1);

function reset(){
wooder=wooder;
pretzel=pretzel;
tasty=tasty;
cheese=cheese;
orderTot=orderTot;
}

$(document).ready(function() {
   $(".menuitems").on("click", function(){
if (custTot===orderTot){
        alert("You win, your order is free!");
        wins++;
        $("#wins").html(wins);
        reset();
} else if (custTot>= orderTot){
        alert("You lost!");
        losses++;
        $("#loss").html(loss);
        reset();
} else if($("#wooder")) {
    custTot= wooder + custTot;
    $("#receipt").html(custTot);
 } else if($("#pretzel")) {
    custTot= pretzel + custTot;
    $("#receipt").html(custTot);
} else if($("#cheese")) {
    custTot= cheese + custTot;
    $("#receipt").html(custTot);
}else if($("#tasty")) {
    custTot= tasty + custTot;
    $("#receipt").html(custTot);
  }

  console.log("wooder is: " + wooder);
  console.log("cheese is: " + cheese);
  console.log("pretzel is: " + pretzel);
  console.log("Tasty is: " + tasty);
     });
});



// var menuValue = [];
//     for (var i = 0; i < 4; i++)
//     {menuValue.push(Math.floor(Math.random() * 12) + 1)
//         }var str = "";
//     for (var i = 0; i < 4; i++)
//     {str += "," + menuValue[i];

// }

// var menuItems= $("img");
// menuItems.addClass("menuitems");
// menuItems.attr("menu-value", menuValue[i]);
 