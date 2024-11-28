function calculate(operation) {
  var firstValue = parseFloat(document.getElementById("first").value);
  var secondValue = parseFloat(document.getElementById("second").value);

  let result;
  document.getElementById("result").textContent = "";

  if (operation == "cbrt" && isNaN(firstValue)) {
    setTimeout(() => {
      alert("Please enter a number");
    }, 0);
    return;
  } else if (isNaN(firstValue) || isNaN(secondValue)) {
    setTimeout(() => {
      alert("Please enter both the numbers");
    }, 0);
    return;
  }

  // Perform calculation based on the selected operation
  switch (operation) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      if (secondValue !== 0) {
        result = firstValue / secondValue;
      } else {
        result = "Cannot divide by zero!";
      }
      break;
    case "cbrt":
      secondValue = NaN;
      result = Math.cbrt(firstValue);
      break;
    default:
      result = "Invalid operation";
  }

  if (isNaN(secondValue))
    document.getElementById(
      "result"
    ).textContent = `${firstValue} ${operation} = ${result}`;
  else
    document.getElementById(
      "result"
    ).textContent = `${firstValue} ${operation} ${secondValue} = ${result}`;
}
