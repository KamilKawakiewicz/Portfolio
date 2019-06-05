// animation web

$(document).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();
    // console.log("scrollPosition", scrollPosition)
    const heightWin = $(window).height();

    // section1
    const $s1 = $(".s1");
    const s1Fromtop = $s1.offset().top
    const s1Height = $s1.outerHeight()
    // console.log("Suma", s1Fromtop + s1Height - heightDoc)

    if (scrollPosition > s1Fromtop + s1Height / 2 - heightWin) {
        $s1.addClass('active');
    }

    // section 2
    const $s2 = $(".s2")
    const s2Fromtop = $s2.offset().top
    const s2Height = $s2.outerHeight()

    if (scrollPosition > s2Fromtop + s2Height / 3 - heightWin) {
        $s2.addClass('active');
    }

    // section 3
    const $s3 = $(".s3")
    const s3Fromtop = $s3.offset().top
    const s3Height = $s3.outerHeight()

    if (scrollPosition > s3Fromtop + s3Height / 2 - heightWin) {
        $s3.addClass('active');
    }

    //section 4
    const $s4 = $(".s4")
    const s4Fromtop = $s4.offset().top
    const s4Height = $s4.outerHeight()

    if (scrollPosition > s4Fromtop + s4Height / 2 - heightWin) {
        $s4.addClass('active');
    }
    // Remover
    if (scrollPosition < 100) {
        $("section").removeClass("active")

    }
});

// show menu
const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")
burger.addEventListener("click", function () {
    this.classList.toggle("active")
    nav.classList.toggle("show")
})

// show helper menu
const btnHelp = document.querySelector(".help");
const helper = document.querySelector(".helper")

btnHelp.addEventListener("click", function () {
    helper.classList.toggle("show")
    this.classList.toggle("show")
})

// scroll button
$("button").click(function () {
    $("body,html").animate({
        scrollTop: $(".s3").offset().top
    }, 600)
});
// scroll menu

$(".me").click(function () {
    $("body,html").animate({
        scrollTop: $(".s1").offset().top
    }, 600)
});
$(".skills").click(function () {
    $("body,html").animate({
        scrollTop: $(".s2").offset().top
    }, 600)
});
$(".portfolio").click(function () {
    $("body,html").animate({
        scrollTop: $(".s3").offset().top
    }, 600)
});
$(".contact").click(function () {
    $("body,html").animate({
        scrollTop: $(".s4").offset().top
    }, 600)
});

// taping txt

const txt = `Jestem 30 letnim Front-end developerem, pochodzę z Zagórza. Swoją przygodę z tworzeniem stron internetowych rozpocząłem w lipcu 2018 r. W moich projektach wykorzystuję HTML5, CSS3, Java Script, React.js. Używam narzędzi takich jak Git oraz Webpack. Jestem w trakcie nauki Node.js, Express.js i MongoDB. Moje projekty wykonuję w myśl zasady mobile-first. Są w pełni responsywne, wygladają dobrze zarówno na ekranach komputerów jak i telefonów mobilnych.  
Szukam pracy lub stażu na terenie Krakowa.`

const txtP = document.querySelector(".txt");
const spnLine = document.querySelector(".cursor");

indexTxt = 0;
time = 20;

const writeLetter = () => {
    txtP.textContent += txt[indexTxt];
    indexTxt++
    if (txt.length === indexTxt) {
        clearInterval(tapingLetter)
    }
}

const tapingLetter = setInterval(writeLetter, time);



"Chciałem pokrótce opisać projekty znajdujace sie w portfolio:- Portfolio (HTML, CSS, Java-Script, jQuery) - Rock, Paper, Scissors (HTML ,CSS ,JS) - Slider (HTML ,CSS ,JS) -PhysiotherapySide (HTML, CSS, React.js, React-Router) - WeatherApp(HTML, CSS, React.js, REST API)"