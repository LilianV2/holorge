
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
