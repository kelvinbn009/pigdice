var sentence=prompt("some text");
//var sentence=prompt("Kindly right something");
var blue = sentence.charAt(0).toUpperCase();
var orange = sentence.charAt(sentence.length-1).toUpperCase();
var green=blue.concat(orange)
//document.write(green);

function reverseString(green) {
var splitString = green.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
return joinArray;
}
//document.write(reverseString(green));
//document.write(green);

//function combine(sentence){
  var kj=sentence.concat(green);
  //return kj;
//}
document.write(kj);

$("p").click(function(){
  alert(sentence);
});
$("img").click(function(){
  alert(kj);
});







//jQuery(document).ready(function() {
//  jQuery("h1").click(function() {
    //  alert("This is a header.");
    //  });

    //  jQuery("p").click(function() {
    //    alert("This is a paragraph.");
    //  });

    //  jQuery("img").click(function() {
    //    alert("This is an image.");
    //  });
    //});
