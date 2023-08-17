function printResult() {
    let score = document.getElementById("averageScore").value;
    if (Number(score) > 5 && Number(score) <= 10) {
        document.getElementById("result").value = "Duoc len lop";
    } else if (Number(score) < 5 && Number(score) >= 0) {
        document.getElementById("result").value = "O lai lop";
    } else {
        document.getElementById("result").value = "vui long nhap lai";
    }

}

