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
