let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

let cafAmericano = 150;
let cafLatte = 75;
let cafTea = 25;

function incAmericano() {
    count += cafAmericano;
    countEl.textContent = count;
    saveEl.textContent += 'Americano - ';
}

function incLatte() {
    count += cafLatte;
    countEl.textContent = count;
    saveEl.textContent += 'Cafe Latte - ';
}

function incTea() {
    count += cafTea;
    countEl.textContent = count;
    saveEl.textContent += 'Black Tea - ';
}

function reset() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = 'You have taken:';
}