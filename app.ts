const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button");

function add(a: number, b: number) {
  return a + b;
}

buttonElement?.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num1Element.value;
  var ans = add(+num1, +num2);
  console.log(ans);
});
