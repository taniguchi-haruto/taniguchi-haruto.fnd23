'use strict'
const url = "https://github.com/taniguchi-haruto/taniguchi-haruto.fnd23/blob/main/FND-23%E6%9C%9F.png?raw=true"
function passConfirmation() {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;
    const pass3 = document.getElementById("pass3").value;
    if (pass1 === "D" && pass2 === "I" && pass3 === "G") {
        const h1 = document.getElementsByTagName("h1");
        const text = document.getElementsByClassName("text");
        const div = document.getElementsByTagName("div");
        const body = document.getElementsByTagName("body")
        h1[0].outerText = "";
        text[0].style.display = "none"
        text[1].style.display = "none"
        text[2].style.display = "none"
        body[0].style.width = "900px";
        body[0].style.height = "400px"
        div[0].style.backgroundImage = "url(" + url + ")";
        div[0].style.width = "100%";
        div[0].style.height = "100%"
        div[0].style.display = "inline-block";
        div[1].outerHTML = "<div>20日間ありがとうございました！<div>";
        div[1].style.height = "100px"
        div[1].style.fontSize = "55px"
        div[1].style.textAlign = "center";

    }
}


