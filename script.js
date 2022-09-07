function closeDropdown() {
    document.querySelector("#custom-time-choice").style.display = "none";
    document.querySelector("#timertools").style.display = "flex";
    document.querySelector("main .dropdown").innerHTML = "";
}

function openDropdown() {
    document.querySelector("#timertools").style.display = "none";
    document.querySelector("main .dropdown").innerHTML = `
    <button class="dropbtn">Choose a time for the timer</button>
    <div class="dropdown-content">
        <a href="javascript:;" id="thirtySec">30 sec</a>
        <a href="javascript:;" id="oneMin">1 min</a>
        <a href="javascript:;" id="twoMin">2 min</a>
        <a href="javascript:;" id="fiveMin">5 min</a>
        <a href="javascript:;" id="tenMin">10 min</a>
        <a href="javascript:;" id="fifteenMin">15 min</a>
        <a href="javascript:;" id="thirtyMin">30 min</a>
        <a href="javascript:;" id="fourtyFiveMin">45 min</a>
        <a href="javascript:;" id="oneHr">1 hr</a>
        <a href="javascript:;" id="twoHr">2 hr</a>
        <a href="javascript:;" id="Custom">Custom</a>
    </div>
`;
}

function openTimer() {
    document.querySelector("#custom-time-choice").style.display = "none";
    document.querySelector("#timertools").style.display = "none";
    document.querySelector("main .dropdown").innerHTML = "";
    document.querySelector("#stopwatch-tools").style.display = "grid";
    document.querySelector("footer").style.display = "none";
}

var countStopwatch = false;
var stopwatchSec = 0;
var stopwatchMin = 0;
var stopwatchHr = 0;
var lapnumber = 1;

function fixNaN(number) {
    if (number == NaN) {
        return 0;
    } else {
        return number;
    }
}


const x = setInterval(() => {
    if (countStopwatch) {
        if (stopwatchSec !== 59) {
            stopwatchSec += 1;
        } else if (stopwatchSec === 59 && stopwatchMin !== 59) {
            stopwatchSec = 0;
            stopwatchMin += 1;
        } else if (stopwatchSec === 59 && stopwatchMin === 59) {
            stopwatchSec = 0;
            stopwatchMin = 0; 
            stopwatchHr += 1;
        }
        document.querySelector("#time").innerHTML = `${addZeroBefore(stopwatchHr)}:${addZeroBefore(stopwatchMin)}:${addZeroBefore(stopwatchSec)}`;
    }
}, 1000);

document.querySelector("#thirtySec").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 0;
    var sec = 30;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("#istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#oneMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 1;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("#istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#twoMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 2;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#fiveMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 5;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#tenMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 10;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("#istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#fifteenMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 15;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#thirtyMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 30;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#fourtyFiveMin").addEventListener("click", () => {
    closeDropdown();
    var hr = 0;
    var min = 45;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#oneHr").addEventListener("click", () => {
    closeDropdown();
    var hr = 1;
    var min = 0;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#twoHr").addEventListener("click", () => {
    closeDropdown();
    var hr = 2;
    var min = 0;
    var sec = 0;
    document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
    const y = setInterval(() => {
        if (!(hr === 0 && min === 0 && sec === 0)) {
            if (sec !== 0) {
                sec -= 1;
            } else {
                if (sec === 0 && min !== 0) {
                    min -= 1;
                    sec = 59;
                } else {
                    if (sec === 0 && min === 0 && hr !== 0) {
                        hr -= 1;
                        min = 59;
                        sec = 59;
                    }
                }
            }
            document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
        } else {
            document.querySelector("#timer").innerHTML = "";
            document.querySelector("istimeup").innerHTML = "TIME IS UP!!!";
            var sound = document.querySelector("#AlarmSound");
            sound.play();
            clearInterval(y);
        }  
    }, 1000);
});

document.querySelector("#Custom").addEventListener("click", () => {
    document.querySelector(".dropdown").style.display = "none";
    document.querySelector("#custom-time-choice").style.display = "flex";
});

document.querySelector("#startCustomTime").addEventListener("click", () => {
    closeDropdown();
    var hr = parseInt(document.querySelector("input#hr").value);
    var min = parseInt(document.querySelector("input#min").value);
    var sec = parseInt(document.querySelector("input#sec").value);
    if (hr === 0 && min === 0 && sec === 0) {
        openDropdown();
    } else {
        document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`
        const y = setInterval(() => {
            if (!(hr === 0 && min === 0 && sec === 0)) {
                if (sec !== 0) {
                    sec -= 1;
                } else {
                    if (sec === 0 && min !== 0) {
                        min -= 1;
                        sec = 59;
                    } else {
                        if (sec === 0 && min === 0 && hr !== 0) {
                            hr -= 1;
                            min = 59;
                            sec = 59;
                        }
                    }
                }
                document.querySelector("#timer").innerHTML = `${hr}hr ${min}min ${sec}sec`;
            } else {
                document.querySelector("#timer").innerHTML = "";
                document.querySelector("#istimeup").innerHTML = "TIME IS UP!!!";
                var sound = document.querySelector("#AlarmSound");
                sound.play();
                clearInterval(y);
            }  
        }, 1000);
    }
});

document.querySelector("#Stopwatch").addEventListener("click", () => {
    openTimer();
    document.querySelector("main").style.alignItems = "center";
    document.querySelector("main").style.justifyContent = "center";
});

document.querySelector("#lap").addEventListener("click", () => {
    document.querySelector(".laps").innerHTML += `lap ${lapnumber++}: ${addZeroBefore(stopwatchHr)}:${addZeroBefore(stopwatchMin)}:${addZeroBefore(stopwatchSec)}<br />`;
});

document.querySelector("#startORpauseStopwatch").addEventListener("click", () => {
    var button = document.querySelector("#startORpauseStopwatch");
    if (countStopwatch === false) {
        button.innerHTML = "pause stopwatch";
    } else {
        button.innerHTML = "start stopwatch";
    }
    countStopwatch = !countStopwatch;
});

document.querySelector("#reset").addEventListener("click", () => {
    stopwatchSec = 0;
    stopwatchMin = 0;
    stopwatchHr = 0;
    document.querySelector("#time").innerHTML = `${addZeroBefore(stopwatchHr)}:${addZeroBefore(stopwatchMin)}:${addZeroBefore(stopwatchSec)}`;
    var button = document.querySelector("#startORpauseStopwatch");
    button.innerHTML = "start stopwatch";
    countStopwatch = false;
});

function addZeroBefore(number) {
    var string = `${number}`;
    if (string.length === 1) {
        return "0" + string;
    } else {
        return string;
    }
}