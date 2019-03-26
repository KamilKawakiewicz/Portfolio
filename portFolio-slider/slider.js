const images = document.querySelector(".images");
const texts = document.querySelector(".texts");

const arrowLeft = document.querySelector(".left .fas")
const arrowRight = document.querySelector(".right .fas")

const dots = [...document.querySelectorAll(".dots span")];
const dot = document.querySelector(".dots")

const sliders = [{
        img: "img/wheat_640.jpg",
        txt: "Grain"
    },
    {
        img: "img/bird_640.jpg",
        txt: "Owl"
    },
    {
        img: "img/ice-cubes_640.jpg",
        txt: "Ice cube"
    }
]

let time = 3000;
let active = 0;



const slider = () => {
    if (active >= 2) {
        active = -1;
    }
    active++;
    images.src = sliders[active].img;
    texts.textContent = sliders[active].txt;
    changeDot();
}

const slideLeft = () => {
    if (active <= 0) {
        active = 3;
    }
    active--;
    images.src = sliders[active].img;
    texts.textContent = sliders[active].txt;

    intervals();
    changeDot();
}
const sliderRight = () => {
    if (active >= 2) {
        active = -1;
    }
    active++;
    images.src = sliders[active].img;
    texts.textContent = sliders[active].txt;

    intervals();
    changeDot();
}

let indexInterval = setInterval(slider, time)

const intervals = () => {
    clearInterval(indexInterval);
    indexInterval = setInterval(slider, time);
}
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
// const clickDots = (e) => {
//     e.target.classList.add("active")
//     if (e.target.classList.add("active")) {
//         for (i = 0; i < dot.length; i++) {
//             (dot.classList.remove("active"))
//         }
//     }
// }


arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", sliderRight);

// dot.addEventListener("click", clickDots);