var min = 3;
var sec = 0;
var willCountdown = false;

const x = setInterval(() => {
    if (willCountdown) {
        if (sec !== 0) {
            sec -= 1;
        } else if (sec === 0 && min !== 0) {
            min -= 1;
            sec = 59;
        } else {
            document.querySelector("#time").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(x);
        }  
    }
    document.querySelector("#time").innerHTML = `${min}:${addZeroBefore(sec)} remaining`;
}, 1000);

function addZeroBefore(number) {
    var string = `${number}`;
    if (string.length === 1) {
        return "0" + string;
    } else {
        return string;
    }
}

document.querySelector("#Start").addEventListener("click", () => {
    willCountdown = !willCountdown;
    if (willCountdown === true) {
        document.querySelector("#Start").innerHTML = "Pause";
    } else {
        document.querySelector("#Start").innerHTML = "Start";
    }
});

document.querySelector("#Reset").addEventListener("click", () => {
    document.querySelector("#Start").innerHTML = "Start";
    willCountdown = false;
    min = 3;
    sec = 0;
    document.querySelector("#time").innerHTML = `${min}:${addZeroBefore(sec)} remaining`;
});