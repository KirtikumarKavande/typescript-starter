const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const dataArray: number[] = [];

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
}

function PrintResult(resultObj: { val: number; date: Date }) {
  console.log(resultObj);
}
buttonElement.addEventListener("click", () => {
  const a = num1Element.value;
  const b = num1Element.value;
  var ans = add(+a, +b);
  dataArray.push(ans as number);
  console.log(">>>>>>>>>>>>>>>", dataArray);
  PrintResult({ val: ans as number, date: new Date() });
});
