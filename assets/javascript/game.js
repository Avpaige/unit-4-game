//set vars
//generate value of gems
//assign value of gems
//set total order price
//determine if gem total is higher or lower than order total
//update wins/losses
//reset game based on wins/losses
    //reset value of gems and order total



var win = 0;
var loss = 0;
var orderTot = Math.floor((Math.random()*120)+19);
var custTot= 0;

var menuValue = [];
    for (var i = 0; i < 4; i++)
    {menuValue.push(Math.floor(Math.random() * 12) + 1)
        }var str = "";
    for (var i = 0; i < 4; i++)
    {str += "," + menuValue[i];
    }


$(".orderTot").text("The random order total is: "+ orderTot);
$(".scoreboard").text("Wins: "+ win, "Losses: "+ loss);


var menuItems = $("img");
menuItems.attr("menuvalue", menuValue[i]);

var reset = function(){
    //reset order total and menu item values
}


console.log("The order Total is " + orderTot);
console.log("The menu item costs are " + menuValue);

$(".menuitems").on("click", function(){

    alert("click listener is working");
    
var menuValue = ($(this).attr("menuvalue"));
var menuValue=parseInt(menuValue);
menuValue+=custTot;

$(".custTot").text("Your order total is: "+ custTot);



if (custTot===orderTot){
    wins++;
    reset();
}else if (custTot>orderTot){
    losses++;
    reset();

}
});

console.log("menu value is "+ menuValue);
console.log("customer order total is " + custTot);
console.log("wins are "+ win);
console.log("lossess are " + loss);