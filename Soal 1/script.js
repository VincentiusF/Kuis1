// lanjutkan script ini ya ...
let nama = "Arif";
localStorage.setItem("nama", nama);
let hobi = ["Baca", "Bermain Game", "Belajar Coding"];
localStorage.setItem("hobi", hobi);

let mhs = {nama : "Arif", hobi : "Belajar Coding"};
console.log(mhs.nama);
console.log(mhs.hobi);

let list =  document.getElementById("list");

let listhobi =[];
function getlisthobi() {
    listhobi.innerHTML = "";
     if(localStorage.getItem("hobi")) {
        data1 = JSON.parse(localStorage.getItem("testimoni"));
        for(const [index, row] of listhobi.entries()) {
             list.innerHTML += `<li>${row.nama} ${row.hobi}</li>`;
}
     }
}
getlisthobi();