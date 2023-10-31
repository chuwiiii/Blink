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

// Audio Function

document.querySelectorAll('.play-button').forEach(function (image) {
    var albumId = image.id + 'Album';
    var audioElement = document.getElementById(albumId);
    var progress = document.getElementById('progress' + image.id);

    var songIntervals = {
        SQAlbum: [
            { id: "ddudu", start: 0.4, end: 186 },
            { id: "foreverYoung", start: 186, end: 386 },
            { id: "really", start: 386, end: 590 },
            { id: "seeULater", start: 590, end: 840 }
        ],
        KTLAlbum: [
            { id: "killThislove", start: 0.4, end: 189 },
            { id: "DKWtD", start: 189, end: 390 },
            { id: "kickIt", start: 390, end: 580 },
            { id: "hopeNot", start: 580, end: 768 },
            { id: "dduduRemix", start: 768, end: 976 }
        ],
        SOLOAlbum: [
            { id: "solo", start: 0.4, end: 169 },
            { id: "soloIns", start: 169, end: 174 },
        ],
        RAlbum: [
            { id: "ontheGround", start: 0.4, end: 192 },
            { id: "gone", start: 192, end: 362 }

        ],
        BPAlbum: [
            { id: "pinkVenom", start: 0.4, end: 183 },
            { id: "shutDown", start: 183, end: 356 },
            { id: "typaGirl", start: 356, end: 535 },
            { id: "yeahYeahYeah", start: 535, end: 711 },
            { id: "hardToLove", start: 711, end: 764 },
            { id: "theHappiestGirl", start: 764, end: 981 },
            { id: "tally", start: 981, end: 1163 },
            { id: "readyForLove", start: 1163, end: 193 }
        ],
        MEAlbum: [
            { id: "flower", start: 0.4, end: 173 },
            { id: "allEyesOnMe", start: 173, end: 335 }

        ],
        LLAlbum: [
            { id: "lalisa", start: 0.4, end: 198 },
            { id: "money", start: 198, end: 366 }
        ]
    };
    var currentAlbum = albumId;

    function stopAllAudio() {
        document.querySelectorAll('audio').forEach(function (audio) {
            if (audio !== audioElement) {
                audio.pause();
            }
        });
    }

    image.addEventListener('click', function () {
        if (audioElement.paused) {
            stopAllAudio(); // Stop all other audio elements
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });

    audioElement.addEventListener('timeupdate', function () {
        var currentTime = audioElement.currentTime;
        var duration = audioElement.duration;
        progress.value = (currentTime / duration) * 100;

        songIntervals[currentAlbum].forEach(function (song) {
            var element = document.getElementById(song.id);
            if (currentTime >= song.start && currentTime <= song.end) {
                element.style.color = "red";
            } else {
                element.style.color = "black";
            }
        });
    });

    audioElement.addEventListener('loadedmetadata', function () {
        progress.max = audioElement.duration;
    });

    progress.addEventListener('input', function () {
        var newTime = (progress.value / 100) * audioElement.duration;
        audioElement.currentTime = newTime;
    });

    audioElement.addEventListener('ended', function () {
        progress.value = 0;
        songIntervals[currentAlbum].forEach(function (song) {
            var element = document.getElementById(song.id);
            element.stylecolor = "black";
        });
    });
});





