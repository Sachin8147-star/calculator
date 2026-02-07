let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        display.classList.add("result-animate");

        setTimeout(() => {
            display.classList.remove("result-animate");
        }, 300);
    } catch {
        display.value = "Error";
    }
}