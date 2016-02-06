function myFirstJS(){
var message="Good Morning";
alert(message);

var name;
name=prompt("What is your name");
alert("Thank you + name");

var div ="";
div =
  document.getElementById("js");
div.innerHTML= message + name;
}
