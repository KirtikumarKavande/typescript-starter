var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function add(a, b) {
    return a + b;
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num1Element.value;
    var ans = add(+num1, +num2);
    console.log(ans);
});
