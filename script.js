// Contador que atualiza os valores de moedas por segundo
setInterval(upCounter, 1000);
function upCounter() {
	c.innerText = parseInt(c.innerText) + parseInt(btc.innerText);
}

// DOM elements
let c = document.getElementById('counter');
let btc = document.getElementById('btcSec');

// functions
function clickBtc() {
	c.innerText = parseInt(c.innerText) + 1;
}

function addBtc() {
	btc.innerHTML = parseInt(btc.innerHTML) + 1;
	c.innerHTML = parseInt(c.innerHTML) - 10;
}
