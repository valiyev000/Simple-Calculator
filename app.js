
var display = document.querySelector("#display")
var buttons = document.querySelectorAll("button")
var lastChar = isNaN(+display.innerHTML[display.innerHTML.length - 1])
var counterForDot = 0


if (localStorage.getItem("display-innerHTML") !== null) {
    display.innerHTML = localStorage.getItem("display-innerHTML")
}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {

        // console.log(e.target.innerHTML); //TODO Prob ucun qoyulub

        switch (e.target.innerHTML) {
            case "=":
                try {
                    eval(display.innerHTML)
                    display.innerHTML = eval(display.innerHTML)
                    localStorage.setItem("display-innerHTML", display.innerHTML)
                    counterForDot = 0
                } catch (e) {
                    alert("Yazılışda xəta var...")
                }
                break;

            case "AC":
                display.innerHTML = "0"
                localStorage.setItem("display-innerHTML", display.innerHTML)
                counterForDot = 0
                break;

            case ".":
                if (counterForDot === 0) {
                    display.innerHTML += "."
                    counterForDot++
                }
                break;

            default:
                if (display.innerHTML === "0") { //*EGER EKRANDA SIFIRDISA BU STATEMENT'DE DAXIL OLUR

                    if (isNaN(e.target.innerHTML) === false) { //* KLIK OLUNAN DUYME REQEMDISE EKRANI SIFIRLAYIR
                        display.innerHTML = ""

                    }
                    display.innerHTML += e.target.innerHTML //* KLIK OLUNAN DUYMENI EKRANA YAZDIRIR

                } else if (!(lastChar && isNaN(e.target.innerHTML))) { //* EGER EKRANDA SON YAZI OPERATORDUSA VE KLIK OLUNAN DUYME OPERATORDUSA IF' DAXIL OLA BILMEZ
                    display.innerHTML += e.target.innerHTML
                }

                if (isNaN(e.target.innerHTML)) {
                    counterForDot = 0
                }

                break;
        }


        lastChar = isNaN(display.innerHTML[display.innerHTML.length - 1])
        // console.log(lastChar); //TODO Prob ucun qoyulub


    })

}


document.addEventListener("keypress", (e) => {

    for (let i = 0; i < buttons.length; i++) {


        if (e.key === buttons[i].innerHTML) {
            switch (e.key) {
                case "=":
                    try {
                        eval(display.innerHTML)
                        display.innerHTML = eval(display.innerHTML)
                        localStorage.setItem("display-innerHTML", display.innerHTML)
                        counterForDot = 0
                    } catch (e) {
                        alert("Yazılışda xəta var...")
                    }
                    break;
                case ".":
                    if (counterForDot === 0) {
                        display.innerHTML += "."
                        counterForDot++
                    }
                    break;

                default:
                    if (display.innerHTML === "0") {

                        if (isNaN(e.key) === false) {
                            display.innerHTML = ""
                        }
                        display.innerHTML += e.key

                    } else if (!(lastChar && isNaN(e.key))) {
                        display.innerHTML += e.key

                    }

                    if (isNaN(e.key)) {
                        counterForDot = 0
                    }

                    break;
            }
        }

    }
    lastChar = isNaN(display.innerHTML[display.innerHTML.length - 1])


})


display.addEventListener("dblclick", (e) => {
    navigator.clipboard.writeText(display.innerHTML);
    alert("Displayi kopyaladiniz...")
})











