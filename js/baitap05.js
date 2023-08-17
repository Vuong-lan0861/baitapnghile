
function printResult() {
    let score1 = Number(document.getElementById("averageScoreHKMot").value);
    let score2 = Number(document.getElementById("averageScoreHKHai").value);
    let averageScoreYear = (score1 + (score2 * 2)) / 3;
    console.log("averageScoreYear: ")
    document.getElementById("averageScoreYear").value = averageScoreYear;
    if (Number(averageScoreYear) >= 9 && Number(averageScoreYear) <= 10) {
        document.getElementById("result").innerText = "Gioi";
    } else if (Number(averageScoreYear) >= 7 && Number(averageScoreYear) < 9) {
        document.getElementById("result").innerText = "Kha";
    } else if (Number(averageScoreYear) >= 5 && Number(averageScoreYear) < 7) {
        document.getElementById("result").innerText = "Trung binh";
    } else if (Number(averageScoreYear) < 5 && Number(averageScoreYear) >= 0) {
        document.getElementById("result").innerText = "Yeu";
    }
    else { document.getElementById("averageScoreYear").innerText = "Vui long nhap lai" }
}