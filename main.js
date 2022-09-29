const buttons = document.querySelectorAll('input');
const telc = document.querySelectorAll('.numbers')
let visor = document.querySelector('textarea')
let lastOperator = 0;
let sinal = "";

buttons.forEach((element) => {
    element.addEventListener('click', (event) => {
        if (event.target.value == "=") {
            let operatorEnd = parseInt(visor.innerHTML);
            calc(lastOperator, operatorEnd, sinal);

        } else {
            if (event.target.value == "+") {
                setLastOperator();
                sinal = "+";
                visor.innerHTML = "";
            } else {
                if (event.target.value == "-") {
                    setLastOperator();
                    sinal = "-";
                    visor.innerHTML = "";
                } else {
                    if (event.target.value == "/") {
                        setLastOperator();
                        sinal = "/";
                        visor.innerHTML = "";
                    } else {
                        if (event.target.value == "*") {
                            setLastOperator();
                            sinal = "*";
                            visor.innerHTML = "";
                        } else {
                            if (event.target.value == "C") {
                                sinal = "";
                                lastOperator = 0;
                                visor.innerHTML = "";
                            } else {
                                visor.innerHTML = visor.innerHTML + event.target.value;

                            }
                        }
                    }
                }

            }

        }
    })
});
function setLastOperator() {
    let operator = 0;
    operator = visor.innerHTML;
    lastOperator = parseInt(operator);
}
function calc(lastOperator, operator2, sinal) {
    if (sinal == "+") {
        visor.innerHTML = lastOperator + operator2;
    } if (sinal == "-") {
        visor.innerHTML = lastOperator - operator2;
    } if (sinal == "*") {
        visor.innerHTML = lastOperator * operator2;
    } if (sinal == "/") {
        visor.innerHTML = lastOperator / operator2;
    }

}
