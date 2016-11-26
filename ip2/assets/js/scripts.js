var add= function(number1,number2){
return number1+number2;
}
///event.preventDefault();
//var number1 = parseInt($("#add1").val());
//var number2 = parseInt($("#add2").val());
//alert(add(number1, number2));
//var number1=parseInt(prompt("supply a number"));
////var number2=parseInt(prompt("supply another number"));
//alert(add(number1,number2));
//document.write(add(10,5));
document.write(result);

var minus=function(number1,number2){
return number1-number2};
var number1=parseInt(prompt("supply a number"));
var number2=parseInt(prompt("supply another number"));
alert(minus(number1,number2));

var multiply=function(number1,number2){return number1*number2};
var number1=parseInt(prompt("supply a number"));
var number2=parseInt(prompt("supply another number"));
alert(multiply(number1,number2));

var division=function(number1,number2){return number1/number2};
var number1=parseInt(prompt("supply a number"));
var number2=parseInt(prompt("supply another number"));
alert(division(number1,number2));
//confirm("are you ready")

$(document).ready(function() {
        $("form#add").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#add1").val());
          var number2 = parseInt($("#add2").val());
          alert(add(number1, number2));
          $("#output").text(result);
        });
      });
