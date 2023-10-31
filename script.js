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

//glow effect
let audioElement = document.getElementById('SQAlbum');
let albumElement = document.getElementById('SQ');

audioElement.addEventListener('play', function() {
    albumElement.classList.add('glow');
});

audioElement.addEventListener('pause', function() {
    albumElement.classList.remove('glow');
});

let audioElement1 = document.getElementById('KTLAlbum');
let albumElement1 = document.getElementById('KTL');

audioElement1.addEventListener('play', function() {
    albumElement1.classList.add('glow');
});

audioElement1.addEventListener('pause', function() {
    albumElement1.classList.remove('glow');
});

let audioElement2 = document.getElementById('SOLOAlbum');
let albumElement2 = document.getElementById('SOLO');

audioElement2.addEventListener('play', function() {
    albumElement2.classList.add('glow');
});

audioElement2.addEventListener('pause', function() {
    albumElement2.classList.remove('glow');
});


let audioElement3 = document.getElementById('BPAlbum');
let albumElement3 = document.getElementById('BP');

audioElement3.addEventListener('play', function() {
    albumElement3.classList.add('glow');
});

audioElement3.addEventListener('pause', function() {
    albumElement3.classList.remove('glow');
});

let audioElement4 = document.getElementById('MEAlbum');
let albumElement4 = document.getElementById('ME');

audioElement4.addEventListener('play', function() {
    albumElement4.classList.add('glow');
});

audioElement4.addEventListener('pause', function() {
    albumElement4.classList.remove('glow');
});

let audioElement5 = document.getElementById('LLAlbum');
let albumElement5 = document.getElementById('LL');

audioElement5.addEventListener('play', function() {
    albumElement5.classList.add('glow');
});

audioElement5.addEventListener('pause', function() {
    albumElement5.classList.remove('glow');
});

let audioElement6 = document.getElementById('RAlbum');
let albumElement6 = document.getElementById('R');

audioElement6.addEventListener('play', function() {
    albumElement6.classList.add('glow');
});

audioElement6.addEventListener('pause', function() {
    albumElement6.classList.remove('glow');
});



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
            { id: "solo", start: 0.4, end: 170 },
            { id: "soloIns", start: 170, end: 175.6 }
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
            { id: "readyForLove", start: 1163, end: 1357 }
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







