var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
var dataArray = [];
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
}
function PrintResult(resultObj) {
    console.log(resultObj);
}
buttonElement.addEventListener("click", function () {
    var a = num1Element.value;
    var b = num1Element.value;
    var ans = add(+a, +b);
    dataArray.push(ans);
    console.log(">>>>>>>>>>>>>>>", dataArray);
    PrintResult({ val: ans, date: new Date() });
});
