var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks= document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#output-Btn");
var outputBox = document.querySelector("#output-Box");

function calcProfitAndLoss(initial,quantity,current){
    if(initial>current){
    var loss = initial-current;
    var lossPercentage = (loss/initial)*100;
    showOutput("The loss is ")
    }
    elseif(initial<current){
        var profit = current-initial;
        var lprofitPercentage = (profit/initial)*100;
    showOutput("")
    }
    else{
        showOutput("")
    }
}