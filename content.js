window.addEventListener("load", () => {
  // Try to find math CAPTCHAs in page text
  const textContent = document.body.innerText;

  const match = textContent.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
  if (match) {
    const [full, num1, operator, num2] = match;
    let result;

    try {
      result = eval(`${num1} ${operator} ${num2}`);
    } catch (e) {
      console.log("Failed to evaluate:", e);
      return;
    }

    // Try to find an input to fill
    const inputs = document.querySelectorAll("input[type='text'], input[type='number']");
    for (let input of inputs) {
      if (/captcha|verify|question|answer/i.test(input.placeholder || input.name || "")) {
        input.value = result;
        console.log("Filled CAPTCHA with:", result);
        break;
      }
    }
  }
});
