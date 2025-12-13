
var allGrades = [];
var btn = document.getElementById("submitBtn");

btn.addEventListener("click", function() {
    
   
    var mInput = document.getElementById("math");
    var eInput = document.getElementById("english");
    
    var m = parseFloat(mInput.value);
    var e = parseFloat(eInput.value);

   
    if (isNaN(m) || isNaN(e)) {
        alert("請輸入有效的數字");
        return;
    }

   
    var rowAvg = (m + e) / 2;

    
    var newRecord = {
        math: m,
        english: e,
        avg: rowAvg
    };
    allGrades.push(newRecord);

    var tbody = document.getElementById("gradeBody");
    var row = document.createElement("tr");

    // 建立 4 個格子 (td)
    var td1 = document.createElement("td");
    td1.textContent = allGrades.length; // 序號

    var td2 = document.createElement("td");
    td2.textContent = m;

    var td3 = document.createElement("td");
    td3.textContent = e;

    var td4 = document.createElement("td");
    td4.textContent = rowAvg.toFixed(2); // 小數點後兩位

    // 把格子放進列，列放進表格
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4);
    tbody.append(row);

    // 5. 更新最下面的總平均
    updateFooter();

    // 清空輸入框
    mInput.value = "";
    eInput.value = "";
});

// 另外寫一個功能函式算總平均，保持程式整潔
function updateFooter() {
    var totalM = 0;
    var totalE = 0;
    var totalAvg = 0;
    var count = allGrades.length;

    // 用最基本的 for 迴圈加總 (仿照 1A2B 風格)
    for (var i = 0; i < count; i++) {
        totalM += allGrades[i].math;
        totalE += allGrades[i].english;
        totalAvg += allGrades[i].avg;
    }

    // 計算平均，小心除以 0
    var finalM = 0;
    var finalE = 0;
    var finalAll = 0;

    if (count > 0) {
        finalM = totalM / count;
        finalE = totalE / count;
        finalAll = totalAvg / count;
    }

    // 更新 HTML
    document.getElementById("avgMath").textContent = finalM.toFixed(2);
    document.getElementById("avgEng").textContent = finalE.toFixed(2);
    document.getElementById("avgAll").textContent = finalAll.toFixed(2);
}