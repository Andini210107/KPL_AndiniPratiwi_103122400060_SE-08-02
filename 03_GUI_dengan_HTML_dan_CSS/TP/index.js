const editor = document.getElementById("editor");

const total = document.getElementById("total");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");

function hitungHuruf(){

    let teks = editor.value;

    total.textContent = teks.length;

    let jumlahBesar = 0;
    let jumlahKecil = 0;

    for(let i = 0; i < teks.length; i++){

        if(teks[i] >= 'A' && teks[i] <= 'Z'){
            jumlahBesar++;
        }

        if(teks[i] >= 'a' && teks[i] <= 'z'){
            jumlahKecil++;
        }

    }

    upper.textContent = jumlahBesar;
    lower.textContent = jumlahKecil;
}

editor.addEventListener("input", hitungHuruf);

document.getElementById("btnUpper").onclick = function(){
    editor.value = editor.value.toUpperCase();
    hitungHuruf();
}

document.getElementById("btnLower").onclick = function(){
    editor.value = editor.value.toLowerCase();
    hitungHuruf();
}

document.getElementById("btnParagraph").onclick = function(){

    let teks = editor.value.toLowerCase();

    if(teks.length > 0){
        editor.value = teks[0].toUpperCase() + teks.slice(1);
    }

    hitungHuruf();
}