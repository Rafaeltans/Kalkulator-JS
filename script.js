// script.js
let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function persen() {
  let current = math.evaluate(display.value);
  display.value = current / 100
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  //   try {
  //     display.value = eval(display.value);
  //   } catch (error) {
  //     alert('Input tidak valid!');
  //   }
  display.value = math.evaluate(display.value)
}
