var previousValue = document.getElementById("previous value");
var currentValue = document.getElementById("current value");
var delet = document.getElementById("del");
var clear = document.getElementById("clear");

var point = document.getElementById("point");
var Number0 = document.getElementById("0");
var Number1 = document.getElementById("1");
var Number2 = document.getElementById("2");
var Number3 = document.getElementById("3");
var Number4 = document.getElementById("4");
var Number5 = document.getElementById("5");
var Number6 = document.getElementById("6");
var Number7 = document.getElementById("7");
var Number8 = document.getElementById("8");
var Number9 = document.getElementById("9");

var division = document.getElementById("division");
var power = document.getElementById("power");
var addition = document.getElementById("add");
var subtraction = document.getElementById("sub");
var multiplication = document.getElementById("multplication");

var equal = document.getElementById("equal");

function ClickOnNumber() {
  currentValue.innerText = "";

  Number0.onclick = () => {
    currentValue.innerText += "0";
  };
  Number1.onclick = () => {
    currentValue.innerText += "1";
  };
  Number2.onclick = () => {
    currentValue.innerText += "2";
  };
  Number3.onclick = () => {
    currentValue.innerText += "3";
  };
  Number4.onclick = () => {
    currentValue.innerText += "4";
  };
  Number5.onclick = () => {
    currentValue.innerText += "5";
  };
  Number6.onclick = () => {
    currentValue.innerText += "6";
  };
  Number7.onclick = () => {
    currentValue.innerText += "7";
  };
  Number8.onclick = () => {
    currentValue.innerText += "8";
  };
  Number9.onclick = () => {
    currentValue.innerText += "9";
  };
}
ClickOnNumber();

function CleanDisplay() {
  let copy = currentValue.innerText;
  if (
    copy[copy.length - 1] == "." ||
    copy[copy.length - 1] == "^" ||
    copy[copy.length - 1] == "+" ||
    copy[copy.length - 1] == "-" ||
    copy[copy.length - 1] == "÷" ||
    copy[copy.length - 1] == "×"
  ) {
    return true;
  }
}

function ClickOnOperant() {
  let validation = false;
  point.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += ".";
  };
  multiplication.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += "×";
  };
  subtraction.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += "-";
  };
  addition.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += "+";
  };
  power.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += "^";
  };
  division.onclick = () => {
    validation = CleanDisplay();
    if (validation == true) {
      return;
    }
    currentValue.innerText += "÷";
  };
}

ClickOnOperant();

function setcharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

delet.onclick = () => {
  currentValue.innerText = setcharAt(
    currentValue.innerText,
    currentValue.innerText.length - 1,
    ""
  );
  previousValue.innerText = "";
};
clear.onclick = () => {
  currentValue.innerText = "";
  previousValue.innerText = "";
};

function convert() {
  let copy = currentValue.innerText;
  for (let i = 0; i < copy.length - 1; i++) {
    if (copy[i] == "×") {
      copy = setcharAt(copy, i, "*");
    }
    if (copy[i] == "÷") {
      copy = setcharAt(copy, i, "/");
    }
    if (copy[i] == "^") {
      copy = setcharAt(copy, i, "**");
    }
  }
  return copy;
}

equal.onclick = () => {
  result = convert();
  previousValue.innerText = eval(result);
};
