var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks= document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#output-Btn");
var outputBox = document.querySelector("#output-Box");

function calcProfitAndLoss(initial,quantity,current){
    if(initial>current){
    var loss = (initial-current)*quantity;
    var lossPercentage = (loss/(initial*quantity))*100;
    showOutput(`The loss is ${loss} and the percent is -${lossPercentage}%`);
    outputBox.style.color="red";
    }
    else if(initial<current){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/(initial*quantity))*100;
    showOutput(`The profit is ${profit} and the percent is  ${profitPercentage}%`);
    outputBox.style.color="green";
    }
    else{
        showOutput("No profit No loss boss")
        outputBox.style.color="gray";
    }
}
function showOutput(message){
    outputBox.innerText=message;
}


function clickHandler(){
    var ip=Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var curr = Number(currentPrice.value);

    if(ip<=0 || qty <=0 || curr <=0){
        outputBox.innerText="invalid input,enter values >0";
        outputBox.style.color="gray";
    }
    else{



    calcProfitAndLoss(ip,qty,curr)}
}


button.addEventListener("click",clickHandler);