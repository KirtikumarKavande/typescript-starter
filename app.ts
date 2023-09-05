const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num1Element.value;
  var ans = add(num1, num2);
  console.log(ans);
});
