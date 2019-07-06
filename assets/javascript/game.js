var win = 0;
var loss = 0;

var orderTot = Math.floor((Math.random()*120-19+1)+19);
$("#random").html(orderTot);

var custTot= 0;

var wooder =Math.floor((Math.random() * 12-1+1) + 1);
var pretzel=Math.floor((Math.random() * 12-1+1) + 1);
var tasty = Math.floor((Math.random() * 12-1+1) + 1);
var cheese=Math.floor((Math.random() * 12-1+1) + 1);

function reset(){
wooder=Math.floor((Math.random() * 12) + 1);
pretzel=Math.floor((Math.random() * 12) + 1);
tasty=Math.floor((Math.random() * 12) + 1);
cheese=Math.floor((Math.random() * 12-1+1) + 1);
orderTot=Math.floor((Math.random()*120-19+1)+19);
$("#random").html(orderTot);
custTot= 0;
$("#receipt").html(custTot);
}

$(document).ready(function() {
   $(".menuitems").on("click", function(){
    $("#random").html(orderTot);
if (custTot===orderTot){
        reset();
        alert("You win, your order is free!");
        win++;
        $("#wins").html(win);
        reset();
} else if (custTot>= orderTot){
        reset(); 
        alert("You lost! Hope you brought cash!");
        loss++;
        $("#loss").html(loss);
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
 