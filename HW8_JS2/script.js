// 依照講義 P7 要求，定義獨立的運算函式
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error"; // 處理除以 0
    }
    return a / b;
}

// 依照你的 Lab4 寫法，使用 addEventListener
var btn = document.getElementById("calcBtn");

btn.addEventListener("click", function() {

    // 1. 取得輸入值
    var n1Input = document.getElementById("num1");
    var n2Input = document.getElementById("num2");
    var opInput = document.getElementById("operator");

    var n1 = parseFloat(n1Input.value);
    var n2 = parseFloat(n2Input.value);
    var op = opInput.value;

    // 2. 檢查是否為數字 (仿照你的範例寫法)
    if (isNaN(n1) || isNaN(n2)) {
        alert("請輸入有效的數字");
        return;
    }

    // 3. 進行運算
    var result = 0;
    var resultText = ""; // 用來存最後要顯示的字串

    switch (op) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = subtract(n1, n2);
            break;
        case "*":
            result = multiply(n1, n2);
            break;
        case "/":
            var divResult = divide(n1, n2);
            if (divResult === "Error") {
                alert("除數不能為 0！");
                return;
            }
            result = divResult;
            break;
        default:
            return;
    }

    // 4. 更新結果 (Result Display)
    // 題目要求：Show the result below the form, rounded to 2 decimal places
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Result = " + result.toFixed(2);
});