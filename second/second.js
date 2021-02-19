const first = document.getElementById('first');
const second = document.querySelector('#second');
const listElement = document.querySelectorAll('.list-element');
const button = document.getElementById('button');
let r, g, b;
let massiiv = ['esimene', 'teine', 'kolmas', 'neljas'];
let numbers = [1, 2, 4, 10, 8];
let colors = ['green', 'blue', 'pink', 'gray', 'orange'];
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

updateClock();
setInterval(updateClock, 1000);


function updateClock() {
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}


button.addEventListener('click', buttonPressed);
window.addEventListener('keypress', buttonPressed);
first.addEventListener('mousemove', changeColor);

setTimeout(changeColor, 2000);
// setInterval(changeColor, 100);

function changeColor() {
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    first.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

let person = {
    firstName: "Marilii",
    lastName: "Saar",
    age: 33,
    height: 176,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());
// console.log(person['firstName'] + " " + person.lastName);

// listElement.style.color = 'green'; NB! nii ei saa teha!

console.log(listElement);

first.style.color = "red";

numbers.sort(); // NB! sorteerib tähestikulises järjekorras!
numbers.sort(function(a, b){return a - b}); // Numbrilises järjekorras sorteerimiseks. Teistpidi on b - a

massiiv.sort();
massiiv.reverse();

// window.alert(massiiv[0]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

massiiv.forEach(function(item) {
    console.log(item);
    let text = '<li>' + item + '</li>';
    first.innerHTML = first.innerHTML + text;
});

function buttonPressed() {
    console.log(colors);
    for (let i = 0; i < listElement.length; i++) {
        listElement[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }
}