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
    document.getElementById("SQAlbum"),
    document.getElementById("KTLAlbum"),
    document.getElementById("SOLOAlbum"),
    document.getElementById("RAlbum"),
    document.getElementById("BPAlbum"),
    document.getElementById("MEAlbum"),
    document.getElementById("LLAlbum"),
];

var playButtons = [
    document.getElementById("SQ"),
    document.getElementById("KTL"),
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
            
            // Update progress.max when a new audio starts playing
            progress.max = currentAudio.duration;
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
    audio.addEventListener("timeupdate", function () {
        if (!progress.getAttribute("seeking")) {
            progress.value = audio.currentTime;
            if (!audio.paused) {
                progress.value = audio.currentTime;
            }
        }
    });

    audioElements.forEach(function (audio, index) {

        audio.addEventListener("loadedmetadata", function () {
            progress.max = audio.duration;
        });
    

        audio.addEventListener("timeupdate", function () {
            if (!progress.getAttribute("seeking")) {
                progress.value = audio.currentTime;
            }
        });

        audio.addEventListener("ended", function () {
            progress.value = 0; // Reset progress bar to start when audio ends
        });
    });

    progress.addEventListener("input", function () {
        if (currentAudio) { // Check if an audio is playing
            currentAudio.currentTime = progress.value;
        }
    });
    //ddudu
    var dduduStartTime = 0;
    var dduduEndTime = 208;
    var dduduTextColor = "red";

    var dduduElement = document.getElementById("ddudu");
    var audioElement = document.getElementById("SQAlbum");

    audioElement.addEventListener("timeupdate", function () {
        progress.value = audioElement.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audioElement.currentTime >= dduduStartTime && audioElement.currentTime <= dduduEndTime) {
            dduduElement.style.color = dduduTextColor;
        } else {
            dduduElement.style.color = "black";
        }
    });

    var foreverYoungStartTime = 208.9;
    var foreverYoungEndTime = 445.9;
    var foreverYoungTextColor = "red";

    var foreverYoungElement = document.getElementById("foreverYoung");
    var audioElement = document.getElementById("SQAlbum");

    audioElement.addEventListener("timeupdate", function () {
        progress.value = audioElement.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audioElement.currentTime >= foreverYoungStartTime && audioElement.currentTime <= foreverYoungEndTime) {
            foreverYoungElement.style.color = foreverYoungTextColor;
        } else {
            foreverYoungElement.style.color = "black";
        }
    });
    //really
    var reallyStartTime = 446;
    var reallyEndTime = 643.9;
    var reallyTextColor = "red";

    var reallyElement = document.getElementById("really");
    var audioElement = document.getElementById("SQAlbum");

    audioElement.addEventListener("timeupdate", function () {
        progress.value = audioElement.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audioElement.currentTime >= reallyStartTime && audioElement.currentTime <= reallyEndTime) {
            reallyElement.style.color = reallyTextColor;
        } else {
            reallyElement.style.color = "black";
        }
    });
    
    var seeULaterStartTime = 644;
    var seeULaterEndTime = 838;
    var seeULaterTextColor = "red";

    var seeULaterElement = document.getElementById("seeULater");
    var audioElement = document.getElementById("SQAlbum");

    audioElement.addEventListener("timeupdate", function () {
        progress.value = audioElement.currentTime;

        // Check the current time and apply or remove the text color accordingly
        if (audioElement.currentTime >= seeULaterStartTime && audioElement.currentTime <= seeULaterEndTime) {
            seeULaterElement.style.color = seeULaterTextColor;
        } else {
            seeULaterElement.style.color = "black";
        }
    });
    
})
