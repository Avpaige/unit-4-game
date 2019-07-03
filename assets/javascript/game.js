//set vars
//set value of gems
//assign value of gems
//set total order price
//determine if gem total is higher or lower than order total
//update wins/losses
//reset game based on wins/losses
    //reset value of gems and order total


var steak 
var pretzel
var tasty
var wooder
var win = 0;
var loss = 0;
var orderTot = Math.floor((Math.random()*120)+19);

var crystalNum = [];
    for (var i = 0; i < 4; i++)
    {crystalNum.push(Math.floor(Math.random() * 12) + 1)
        }var str = "";
    for (var i = 0; i < 4; i++)
    {str += "," + crystalNum[i];
    }

 $("html").onclick();




console.log("The order Total is " + orderTot);
console.log("The crsytal numbers are " + crystalNum);