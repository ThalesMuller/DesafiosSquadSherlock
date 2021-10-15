const switchNumeralType = () => {
    const lastInputContainer = document.getElementsByClassName("last")[0];
    const firstInputContainer = document.getElementsByClassName("first")[0];

    lastInputContainer.classList.replace("last", "first")
    firstInputContainer.classList.replace("first", "last")

    firstInputContainer.lastElementChild.setAttribute("disabled", true);
    lastInputContainer.lastElementChild.removeAttribute("disabled");


    firstInputContainer.lastElementChild.value = "";
    lastInputContainer.lastElementChild.focus();
}

const triggerSwitchNumeral = () => {
    switchNumeralType();
}

const setResponse = (value) => {
    const lastInput = document.getElementsByClassName("last")[0].lastElementChild
    lastInput.value = value;
}



const key = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const romanize = (number, currentRoman = []) => {
    if (!+number)
        return false;
    var digits = String(+number).split("");
    console.log(number, currentRoman);

    var divisionRemainder = number / 1000;
    if (number / 1000 >= 1) {
        romanize(number - 1000, currentRoman.push("M"));
    }
    else if (number / 500 >= 1) {
        romanize(number - 500, currentRoman.push("D"));
    }
    else if (number / 100 >= 1) {
        romanize(number - 100, currentRoman.push("C"));
    }
    else if (number / 50 >= 1) {
        romanize(number - 50, currentRoman.push("L"));
    }
    else if (number / 10 >= 1) {
        romanize(number - 10, currentRoman.push("X"));
    }
    else if (number / 5 >= 1) {
        romanize(number - 5, currentRoman.push("V"));
    }
    else if (number / 1 >= 1) {
        romanize(number - 1, currentRoman.push("I"));
    }
    else {
        return currentRoman;
    }
}

const handleInputChange = () => {
    const currentInput = document.getElementsByClassName("first")[0].lastElementChild;
    const value = currentInput.value;
    const name = currentInput.name;

    const isRoman = name === 'roman' ? true : false;
    if (!isRoman) {
        let response = romanize(value);
        if (response) {
            console.log(response.toString())
        }
        //setResponse(romanize(value).toString());
    }

}