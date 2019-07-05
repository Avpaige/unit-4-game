//set vars
//generate value of gems
//assign value of gems
//set total order price
//determine if gem total is higher or lower than order total
//update wins/losses
//reset game based on wins/losses
//reset value of gems and order total

var win = 0;
$("#wins").text(wins);

var loss = 0;
$("#loss").text(loss);

var orderTot = Math.floor((Math.random()*120)+19);
$("#random").text(orderTot);
var custTot= 0;

var wooder =Math.floor((Math.random() * 12) + 1);
var pretzel=Math.floor((Math.random() * 12) + 1);
var tasty = Math.floor((Math.random() * 12) + 1);
var cheese=Math.floor((Math.random() * 12) + 1);

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
 
$(document).ready ( function () {
   $(".menuitems").on("click", function(){
if (custTot===orderTot){
    alert("You win!");
    wins++;
} else if (custTot>= orderTot);
    alert("You lose!!");
    losses++;
} ("#wooder"||"#pretzel"||"#tasty"||"#cheese").on("click", function() {
    custTot+=this;
    });


console.log(custTot);
// $(document).ready ( function () {
//     $(".menuitems").on("click", function() {

//     //    var menuValue = ($(this).attr("menu-value"));
//     //    menuValue=parseInt(menuValue);
//    wooder.attr("value", wooderVal);
//         console.log("wodder value after click is:  "+ wooderVal);
//     });

//     $("wooder")
 
// });

// console.log("menu value is "+ menuValue);
// console.log("customer order total is " + custTot);
// console.log("wins are "+ win);
// console.log("lossess are " + loss);
// console.log("The order Total is " + orderTot);
// console.log("The menu item costs are " + menuValue);



// if (custTot===orderTot){
//     wins++;
//     reset();
// }else if (custTot>orderTot){
//     losses++;
//     reset();

// };
// });

// var reset = function(){
//     //reset order total and menu item values
// }


// $(".orderTot").text("The random order total is: "+ orderTot);
// $(".scoreboard").text("Wins: "+ win, "Losses: "+ loss);
// $(".custTot").text("Your order total is: "+ custTot);

