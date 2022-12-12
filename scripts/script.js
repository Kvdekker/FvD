//navbar knop
let steamButton = document.querySelector(".hamburger");
let navOpen = document.querySelector("nav ul");

steamButton.addEventListener("click", navOpenmaken);

function navOpenmaken(){
    navOpen.classList.toggle("openMaken");
    steamButton.classList.toggle("buttonlicht");
}


// Hamburgermenu
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", hamburgeranimatie);

function hamburgeranimatie() {
    hamburger.classList.toggle("active");
}




// Meerbutton categorieën
let meerKnop = document.querySelector("article:nth-of-type(2) button");
let meerUl = document.querySelector("article:nth-of-type(2) ul:nth-of-type(2)");

meerKnop.addEventListener("click", meerweergeven);

function meerweergeven() {
    meerUl.classList.remove("minder");
    meerKnop.classList.add("minder");
}


// Meerbutton kortingen
let meerKnop1 = document.querySelector("article:nth-of-type(5) button");
let meerUl1 = document.querySelector("article:nth-of-type(5) ul:nth-of-type(2)");

meerKnop1.addEventListener("click", meerweergeven2);

function meerweergeven2() {
    meerUl1.classList.remove("minder2");
    meerKnop1.classList.add("minder2");
}



//3 menubuttons article 7
let knop1 = document.querySelector("article:nth-of-type(7) section:nth-of-type(1) button:nth-of-type(1)");
let knop2 = document.querySelector("article:nth-of-type(7) section:nth-of-type(1) button:nth-of-type(2)");
let knop3 = document.querySelector("article:nth-of-type(7) section:nth-of-type(1) button:nth-of-type(3)");

let ul1 = document.querySelector("article:nth-of-type(7) ul:nth-of-type(1)");
let ul2 = document.querySelector("article:nth-of-type(7) ul:nth-of-type(2)");
let ul3 = document.querySelector("article:nth-of-type(7) ul:nth-of-type(3)");

knop1.addEventListener("click", knop1kiezen);
knop2.addEventListener("click", knop2kiezen);
knop3.addEventListener("click", knop3kiezen);

function knop1kiezen() {
    knop1.classList.remove("knopuit");
    knop1.classList.add("knopaan");

    knop2.classList.remove("knopaan");
    knop2.classList.add("knopuit");
    
    knop3.classList.remove("knopaan");
    knop3.classList.add("knopuit");

    ul1.classList.add("aan");
    ul1.classList.remove("uit");
    ul2.classList.remove("aan");
    ul2.classList.add("uit");
    ul3.classList.remove("aan");
    ul3.classList.add("uit");
}

function knop2kiezen() {
    knop1.classList.remove("knopaan");
    knop1.classList.add("knopuit");

    knop2.classList.remove("knopuit");
    knop2.classList.add("knopaan");

    knop3.classList.remove("knopaan");
    knop3.classList.add("knopuit");

    ul2.classList.add("aan");
    ul2.classList.remove("uit");
    ul1.classList.remove("aan");
    ul1.classList.add("uit");
    ul3.classList.remove("aan");
    ul3.classList.add("uit");
}

function knop3kiezen() {
    knop1.classList.remove("knopaan");
    knop1.classList.add("knopuit");

    knop2.classList.remove("knopaan");
    knop2.classList.add("knopuit");

    knop3.classList.remove("knopuit");
    knop3.classList.add("knopaan");

    ul3.classList.add("aan");
    ul3.classList.remove("uit");
    ul1.classList.remove("aan");
    ul1.classList.add("uit");
    ul2.classList.remove("aan");
    ul2.classList.add("uit");
}

// Cowboycat

let cowboycatKnop = document.querySelector("article:nth-of-type(6) img");

let allImg = document.querySelectorAll("img");
let allLi = document.querySelectorAll("li");
let allP = document.querySelectorAll("p");
let allHead = document.querySelectorAll("h1, h2, h3")
let allBackground = document.querySelectorAll("header, nav, main, section, ul, footer")
let allButton = document.querySelectorAll("button");



cowboycatKnop.addEventListener("click", cowboycattime);

function cowboycattime() {
    allImg.forEach((alleImg) => {
        alleImg.src = "./images/cowboycat.gif";
        let cowboycatFoto = document.querySelector("article:nth-of-type(6) img");
        alleImg.classList.add("cowboycat")
    })
    
    allLi.forEach((alleLi) => {
        alleLi.src = "./images/cowboycat.jpg";
        alleLi.classList.add("polonaisecat")
    })

    allHead.forEach((alleHead) => {
        let headTekst = ["YeeeMiauw"];
        alleHead.textContent = headTekst;
    })

    allP.forEach((alleP) => {
        let cowboycatTekst = ["Meowdy Cowcat, Welcome to the Cowcat Meowdo Rodeo Show"];
        alleP.textContent = cowboycatTekst;
    })

    allBackground.forEach((alleBack) => {
        alleBack.classList.add("regenboog");
    })

    allButton.forEach((alleB) => {
        let cowboycatTekst = ["Beter dan laserogen?"];
        alleB.textContent = cowboycatTekst;
    })

    let audioCat = document.querySelector(".aah");
    
    audioCat.play();
    audioCat.volume = 0.1;
}


