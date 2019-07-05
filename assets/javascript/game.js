var win = 0;
var loss = 0;

var orderTot = Math.floor((Math.random()*120)+19);
$("#random").html("<h2>The random order total is: </h2>" + orderTot);

var custTot= 0;

var wooder =Math.floor((Math.random() * 12) + 1);
var pretzel=Math.floor((Math.random() * 12) + 1);
var tasty = Math.floor((Math.random() * 12) + 1);
var cheese=Math.floor((Math.random() * 12) + 1);


console.log("wooder is qual to: " + wooder);
console.log(typeof wooder);

// function reset(){
// wooder=wooder;
// pretzel=pretzel;
// tasty=tasty;
// cheese=cheese;
// orderTot=orderTot;
// }

$(document).ready(function() {
   $(".menuitems").on("click", function(){
 if($("#wooder")) {
    custTot+= wooder;
    console.log("customer total is : " + custTot);
    console.log(typeof custToT);
 }  
if (custTot===orderTot){
    alert("You win!");
    wins++;
    $("#wins").text(wins);
    reset();
} else if (custTot>= orderTot){
    alert("You lose!!");
    losses++;
    $("#loss").text(loss);
    reset();
}
//  else (".menuitems").on("click", function() {
//     custTot+=this;
//         });
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
 