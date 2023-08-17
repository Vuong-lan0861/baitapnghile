


function printResult() {
    let number = parseInt(document.getElementById("numberInput").value);
    let arr = [];
    for (var i = 1; i <= number; i++) {
        if (i % 6 === 0 && i % 9 === 0) {
            arr.push(i);
            // push là thêm giá trị vào mảng arr
            document.getElementById("result").innerHTML = "cac so la:" + arr;
        } 
    }
    // if (arr.length !== 0) {
    //     document.getElementById("result").innerHTML = "cac so la:" + arr;
    // }
    // else {
    //     document.getElementById("result").innerHTML = "So nhap khong hop le!"
    // }
}