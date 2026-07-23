"use strict";
//using "any" type
let value;
value = "Sai Srihitha";
console.log("Data type of value is: " + typeof (value));
//using "unknown" type
let data;
data = "Sai Srihitha";
if (typeof data === "string") {
    console.log("Length of data is: " + data.length);
}
//using "void" type
function ShowMessage(message) {
    console.log(message);
}
ShowMessage("Hello, Sai!");
