// let userName = prompt("Hay nhap ten cua ban");
// document.getElementById("printUserName").innerText = "Chao ban" + userName;
// console.log(document.getElementById("renameUser").value);

// function getRenameUserName(){
// let renameUser = document.getElementById("renameUser").value;
// document.getElementById("printUserName").innerText = "Chao ban" + renameUser;
// }

function tinh_tien_thuong(tienluong, xeploai) {
    let heso;
    switch (xeploai) {
        case "A":
            heso = 2;
            break;
        case "B":
            heso = 1.8;
            break;
        case "C":
            heso = 1.2;
            break;
        case "D":
            heso = 0.8;
            break;
    }
    return "Tien thuong la:" + (tienluong * heso) + "dong";
}
let tinhButton = document.getElementById("tinh-button");
let ketquaLabel = document.getElementById("ketqua");

function printResult() {
    let tienluong = parseInt(document.getElementById("tienluong").value);
    let xeploai = document.getElementById("xeploai").value;
    let ketqua = tinh_tien_thuong(tienluong, xeploai);
    ketquaLabel.innerText = ketqua;
}