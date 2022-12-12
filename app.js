/*
function bouge()

{
    let aiguilleSecondes = document.querySelector("#secondes");
    let aiguilleMinutes = document.querySelector("#minutes");
    let aiguilleHeures = document.querySelector("#heures");

    let maDate = new Date();
    let valeursec = maDate.getSeconds();
    let valeurmin = maDate.getMinutes();
    let valeurh = maDate.getHours();

    console.log(valeursec);
    console.log(valeurmin);
    console.log(valeurh);

    aiguilleSecondes.style.transform = "rotate(" + ((valeursec*6)-90) + "deg)";
    aiguilleMinutes.style.transform = "rotate(" + ((valeurmin*6)-90) + "deg)";
    aiguilleHeures.style.transform = "rotate(" + ((valeurh*30)-90) + "deg)";
}

window.setInterval(bouge, 1000);
 */

// function horloge

function horloge() {

    // aiguilles

    let hour = document.querySelector("#heures")
    let min = document.querySelector("#minutes")
    let sec = document.querySelector('#secondes')

    // dates

    let newDate = new Date ()

    let nbHours = newDate.getHours()
    let nbMin = newDate.getMinutes()
    let nbSec = newDate.getSeconds()

    // movement aiguilles ( explication : 360/60 = 6 => rotation des aiguilles)

    hour.style.transform = "rotate(" + ((nbHours * 30) - 90) + "deg)"
    min.style.transform = "rotate(" + ((nbMin * 6) - 90) + "deg)"
    sec.style.transform = "rotate(" + ((nbSec * 6) - 90) + "deg)"

}

window.setInterval(horloge, 1000)



















