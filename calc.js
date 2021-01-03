window.onload = function(){
var internal;
var expression = document.getElementById("expression").textContent;
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var buttonX = document.getElementById("buttonX");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var buttonDiv = document.getElementById("button:");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var buttonPlus = document.getElementById("button+");
var buttonEq = document.getElementById("button=");
var button0 = document.getElementById("button0");
var buttonPoint = document.getElementById("button,");
var buttonMin = document.getElementById("button-");
var buttonPar1 = document.getElementById("button(");
var buttonPar2 = document.getElementById("button)");
var buttonPerc = document.getElementById("button%");
var buttonRes = document.getElementById("buttonRes");


button1.onclick = function(){
   expression = expression + "1";
   document.getElementById("expression").textContent = expression;

}

button2.onclick = function(){
    expression = expression + "2";
    document.getElementById("expression").textContent = expression;


}

button3.onclick = function(){
    expression = expression + "3";
    document.getElementById("expression").textContent = expression;
 
 }

 button4.onclick = function(){
    expression = expression + "4";
    document.getElementById("expression").textContent = expression;
 
 }

 button5.onclick = function(){
    expression = expression + "5";
    document.getElementById("expression").textContent = expression;
 
 }

 button6.onclick = function(){
    expression = expression + "6";
    document.getElementById("expression").textContent = expression;
 
 }

 button7.onclick = function(){
    expression = expression + "7";
    document.getElementById("expression").textContent = expression;
 
 }

 button8.onclick = function(){
    expression = expression + "8";
    document.getElementById("expression").textContent = expression;
 
 }

 button9.onclick = function(){
    expression = expression + "9";
    document.getElementById("expression").textContent = expression;
 
 }

 button0.onclick = function(){
    expression = expression + "0";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonX.onclick = function(){
    expression = expression + "*";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonDiv.onclick = function(){
    expression = expression + "/";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonPlus.onclick = function(){
    expression = expression + "+";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonMin.onclick = function(){
    expression = expression + "-";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonPerc.onclick = function(){
     expression = expression + "/" + "100" + "*"
    document.getElementById("expression").textContent = expression;
 }

 buttonPoint.onclick = function(){
    expression = expression + ".";
    document.getElementById("expression").textContent = expression;
 
 }

 buttonPar1.onclick = function(){
    expression = expression + "(";
    document.getElementById("expression").textContent = expression;
 }

 buttonPar2.onclick = function(){
    expression = expression + ")";
    document.getElementById("expression").textContent = expression;
 }

 buttonRes.onclick = function(){
     expression = null;
     document.getElementById("expression").textContent = expression;
 }

 buttonEq.onclick = function(){
    expression = eval(expression);
    document.getElementById("expression").textContent = expression;
 }







}

