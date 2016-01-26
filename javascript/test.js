var first_name = "John";
var last_name = "Stahnke";
var greeting = "hello!";
var message1 = "don't forget to pick up these items";
var message2 = "also, make sure to gather wood, for dooms day prepping";
var goodbye = "see you later";
var favorite_quote = "\"Four Score...\"";

//BAD Variable names
// var first name = "test";
// var 2first_name = "test1";
// var math = "";

//operators
// "=" assigns values

// "+=" (concatenation assignment operator, with string) adds to whatever the variable currently has

//output variables to the console!!!!
/*
console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(goodbye);
console.log(favorite_quote);*/

//console.log(greeting + "... " + first_name + " " + last_name + " " + message1 +
// " " + message2 + " " + favorite_quote + " " + goodbye);

//my quote... the parts in asteriks are the variables that will change

//My fellow *Americans*, ask not what your *country* can do for *you* - ask what *you* can do for your *country*.

//lets create some variables to hold the parts that don't change...
var static_words0 = "Dear ";
var static_words1 = " I am at ";
var static_words2 = ". I would like to let you know I am ";
var static_words3 = " Please let ";
var static_words4 = " out to go to the bathroom. And then can you feed ";
var static_words5 = " dinner, since I won't make it home. I am having troubles with ";
var static_words6 = " as it sat ";
var static_words7 = " I will see you ";
var static_words8 = ". Love your; ";

//create a variable that is used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function (onClick) when clicked on
button.addEventListener("click", onClick, false);

function onClick(evt)
{
    evt.preventDefault(evt); //this line stops the form from submitting
    //by preventing its default action

    //Forms
    var element0 = document.getElementById("form1").elements.item(0).value;
    var element1 = document.getElementById("form1").elements.item(1).value;
    var element2 = document.getElementById("form1").elements.item(2).value;
    var element3 = document.getElementById("form1").elements.item(3).value;
    var element4 = document.getElementById("form1").elements.item(4).value;
    var element5 = document.getElementById("form1").elements.item(5).value;
    var element6 = document.getElementById("form1").elements.item(6).value;
    var element7 = document.getElementById("form1").elements.item(7).value;
    var element8 = document.getElementById("form1").elements.item(8).value;
    var element9 = document.getElementById("form1").elements.item(9).value;
    console.log(static_words0 + element0 + static_words1 + element1 + static_words2 + element2 + 
    	static_words3 + element3 + static_words4 + element4 + static_words5 + element5 +
        static_words6 + element6 + static_words7 + element7 + static_words8 + element8);
    // document.getElementById("myForm").elements.item(0).value;
    // return false;
}
