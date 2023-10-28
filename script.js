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
