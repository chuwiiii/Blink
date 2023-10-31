//navigation menu
var navLinks = document.getElementById("navLinks");


function hideMenuOnLoad() {
    navLinks.style.right = "-200px";
}

window.addEventListener('load', hideMenuOnLoad);

function openMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Pause and Play of audio
let progress = document.getElementById("progress");

var audioElements = [
    document.getElementById("KTLAlbum"),
    document.getElementById("SQAlbum"),
    document.getElementById("SOLOAlbum"),
    document.getElementById("RAlbum"),
    document.getElementById("BPAlbum"),
    document.getElementById("MEAlbum"),
    document.getElementById("LLAlbum"),
];

var playButtons = [
    document.getElementById("KTL"),
    document.getElementById("SQ"),
    document.getElementById("SOLO"),
    document.getElementById("R"),
    document.getElementById("BP"),
    document.getElementById("ME"),
    document.getElementById("LL"),
];

var currentAudio = null; // To keep track of the currently playing audio

function stopAllAudio() {
    audioElements.forEach(function (audio, index) {
        audio.pause();
        playButtons[index].innerHTML = "Play";
    });
}

playButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if (currentAudio !== audioElements[index]) {
            stopAllAudio();
            audioElements[index].play();
            currentAudio = audioElements[index];
            button.innerHTML = "Pause";
        } else {
            if (currentAudio.paused) {
                currentAudio.play();
                button.innerHTML = "Pause";
            } else {
                currentAudio.pause();
                button.innerHTML = "Play";
            }
        }
    });
});

audioElements.forEach(function (audio, index) {
    audio.addEventListener("loadedmetadata", function () {
        progress.max = audio.duration;
    });

    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;
    });

    audio.addEventListener("ended", function () {
        clearInterval(updateProgress);
    });
});

progress.addEventListener("input", function () {
    currentAudio.currentTime = progress.value;
});

let updateProgress = setInterval(function () {
    if (!currentAudio.paused) {
        progress.value = currentAudio.currentTime;
    }
}, 500);

//song timeline

//ddudu
var dduduTime = 0;
var transitionBackTime = 208;
var dduduTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= dduduTime) {
            document.getElementById("ddudu").style.color = dduduTextColor;
        } else {
            document.getElementById("ddudu").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("ddudu").style.color = "black";
        }
    });
});

//foreverYoung
var foreverYoungTime = 209;
var transitionBackTime = 446;
var foreverYoungTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= foreverYoungTime) {
            document.getElementById("foreverYoung").style.color = foreverYoungTextColor;
        } else {
            document.getElementById("foreverYoung").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("foreverYoung").style.color = "black";
        }
    });
});

//really
var reallyTime = 447;
var transitionBackTime = 645;
var reallyTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= reallyTime) {
            document.getElementById("really").style.color = reallyTextColor;
        } else {
            document.getElementById("really").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("really").style.color = "black";
        }
    });
});

//seeULater
var seeULaterTime = 646;
var transitionBackTime = 840;
var seeULaterTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= pinkVenomTime) {
            document.getElementById("seeULater").style.color = seeULaterTextColor;
        } else {
            document.getElementById("seeULater").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("seeULater").style.color = "black";
        }
    });
});

//AIIYL
var AIIYLTime = 0;
var transitionBackTime = 2.9;
var AIIYLTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= AIIYLTime) {
            document.getElementById("AIIYL").style.color = AIIYLTextColor;
        } else {
            document.getElementById("AIIYL").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("AIIYL").style.color = "black";
        }
    });
});

//killThisLove
var killThisLoveTime = 0;
var transitionBackTime = 2.9;
var killThisLoveTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= killThisLoveTime) {
            document.getElementById("killThisLove").style.color = killThisLoveTextColor;
        } else {
            document.getElementById("killThisLove").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("killThisLove").style.color = "black";
        }
    });
});

//DKWTD
var DKWTDTime = 0;
var transitionBackTime = 2.9;
var DKWTDextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= DKWTDTime) {
            document.getElementById("DKWTD").style.color = DKWTDTextColor;
        } else {
            document.getElementById("DKWTD").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("DKWTD").style.color = "black";
        }
    });
});

//kickIt
var kickItTime = 0;
var transitionBackTime = 2.9;
var kickItTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= pinkVenomTime) {
            document.getElementById("kickIt).style.color = kickItTextColor;
        } else {
            document.getElementById("kickIt").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("kickIt").style.color = "black";
        }
    });
});

//hopeNot
var hopeNotTime = 0;
var transitionBackTime = 2.9;
var hopeNotTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= hopeNotTime) {
            document.getElementById("hopeNot).style.color = hopeNotTextColor;
        } else {
            document.getElementById("hopeNot").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("hopeNot").style.color = "black";
        }
    });
});

//dduduRemix
var dduduRemixTime = 0;
var transitionBackTime = 2.9;
var dduduRemixTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= dduduRemixTime) {
            document.getElementById("dduduRemix").style.color = dduduRemixTextColor;
        } else {
            document.getElementById("dduduRemix").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("dduduRemix").style.color = "black";
        }
    });
});

//solo
var soloTime = 0;
var transitionBackTime = 2.9;
var soloTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= soloTime) {
            document.getElementById("solo").style.color = soloTextColor;
        } else {
            document.getElementById("solo").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("solo").style.color = "black";
        }
    });
});

//soloIns
var soloInsTime = 0;
var transitionBackTime = 2.9;
var soloInsTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= soloInsTime) {
            document.getElementById("soloIns").style.color = soloInsTextColor;
        } else {
            document.getElementById("soloIns").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("soloIns").style.color = "black";
        }
    });
});

//ontheGround
var ontheGroundTime = 0;
var transitionBackTime = 2.9;
var ontheGroundTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= pinkVenomTime) {
            document.getElementById("ontheGround").style.color = ontheGroundTextColor;
        } else {
            document.getElementById("ontheGround").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("ontheGround").style.color = "black";
        }
    });
});

//gone
var goneTime = 0;
var goneBackTime = 2.9;
var goneTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= goneTime) {
            document.getElementById("gone").style.color = goneTextColor;
        } else {
            document.getElementById("gone").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("gone").style.color = "black";
        }
    });
});

//pink venom
var pinkVenomTime = 0;
var transitionBackTime = 2.9;
var pinkVenomTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= pinkVenomTime) {
            document.getElementById("pinkVenom").style.color = pinkVenomTextColor;
        } else {
            document.getElementById("pinkVenom").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("pinkVenom").style.color = "black";
        }
    });
});

//shutdown
var shutDownTime = 0;
var transitionBackTime = 2.9;
var shutDownTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= shutDownTime) {
            document.getElementById("shutDown").style.color = shutDownTextColor;
        } else {
            document.getElementById("shutDown").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("shutDown").style.color = "black";
        }
    });
});

//typaGirl
var typaGirlime = 0;
var transitionBackTime = 2.9;
var typaGirlTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= shutDownTime) {
            document.getElementById("typaGirl").style.color = typaGirlTextColor;
        } else {
            document.getElementById("typaGirl").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("typaGirl").style.color = "black";
        }
    });
});

//yeahYeahYeah
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//hardToLove
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//theHappiestGirl
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//tally
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//readyForLove
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//flower
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//allEyesOnMe
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//lalisa
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

//money
var yeahYeahYeahTime = 0;
var transitionBackTime = 2.9;
var yeahYeahYeahTextColor = "red";

audioElements.forEach(function (audio, index) {
    audio.addEventListener("timeupdate", function () {
        progress.value = audio.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audio.currentTime >= yeahYeahYeahTime) {
            document.getElementById("yeahYeahYeah").style.color = yeahYeahYeahTextColor;
        } else {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }

        // Check if the audio time is close to transitioning to the next song
        if (audio.currentTime >= transitionBackTime) {
            document.getElementById("yeahYeahYeah").style.color = "black";
        }
    });
});

