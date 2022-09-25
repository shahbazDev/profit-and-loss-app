var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks= document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#output-Btn");
var outputBox = document.querySelector("#output-Box");

function calcProfitAndLoss(initial,quantity,current){
    if(initial>current){
    var loss = (initial-current)*quantity;
    var lossPercentage = (loss/initial)*100;
    showOutput(`The loss is ${loss} and the percent is -${lossPercentage}%`);
    }
    else if(initial<current){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
    showOutput(`The profit is ${profit} and the percent is  ${profitPercentage}%`);
    }
    else{
        showOutput("No profit No loss boss")
    }
}
function showOutput(message){
    outputBox.innerText=message;
}


function clickHandler(){
    var ip=Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var curr = Number(currentPrice.value);
    calcProfitAndLoss(ip,qty,curr)
}


button.addEventListener("click",clickHandler);