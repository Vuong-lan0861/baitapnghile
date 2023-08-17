


let userName = prompt("Hay nhap ten cua ban");
document.getElementById("printUserName").innerText = "Chao ban" + userName;
console.log(document.getElementById("renameUser").value);

function getRenameUserName(){
let renameUser = document.getElementById("renameUser").value;
document.getElementById("printUserName").innerText = "Chao ban" + renameUser;
}