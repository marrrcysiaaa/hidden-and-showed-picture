// pobieramy przycisk:
const arrowBtn = document.querySelector(".arrow")
// pobieramy strzałkę ktora bedzie reagowła na .hide: 
const arrowIcon = document.querySelector(".fas")
// pobieramy obrazek z .hide
const img = document.querySelector(".item1")


// CO MUSIMY ZROBIĆ:



// 1. dodawanie klasy .hide (drugi obraz ktory bedzie zakrywał pierwszy)
// 2. nasłuchiwanie na clicka'a na przycisk (.fas)
// 3. obracanie strzałki w zalezności od klasy .hide (zakryte czy odkryte)
// ------------------------------------------------------



// 1. Tworzymy funkcję która będzie dodawała nam .hide oraz
//   sprawdzała czy img (czyli item1 ) ma tą klasę (.hide) jeżeli tak strzałka (.fas przycisk) będzie obracała się do góry a jezeli nie ma to w dół.

const showImg = () => {
    img.classList.toggle("hide")

    if(img.classList.contains('hide')){
        arrowIcon.style.transform = "rotate(180deg)"
    } else {
        arrowIcon.style.transform = "rotate(0)"
    }
}

arrowBtn.addEventListener("click", showImg)