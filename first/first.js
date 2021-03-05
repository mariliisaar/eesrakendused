let demoTwo = document.getElementById('demo2');
let phoneNumber = document.getElementById('phone')
demoTwo.innerHTML = "test";

let number = 0;
let numberTwo = 2;
let textNumber = "2";
let text = "mingi tekst";

console.log(number + text);
console.log(number + numberTwo);
console.log(numberTwo + textNumber);

function demoFunction() {
    let demoElement = document.getElementById('demo');
    demoElement.innerHTML = "Tegin sisus muudatuse nupu abil.";
}

function changeColor() {
    if(number == 0) {
        demoTwo.style.backgroundColor = "yellow";
        number = 1;
    } else {
        demoTwo.style.backgroundColor = "#123123";
        number = 0;
    }
    
}

function addNumber() {
    phoneNumber.value = 55555555;
}