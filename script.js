/////////////////////////////////
//       navigation menu      //
///////////////////////////////
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


////////////////////////////////////////////////////////////////
//                         ALBUMS                            //
///////////////////////////////////////////////////////////////

// Audio Function
//For play/pause hover
const SQImage = document.getElementById("SQImage");
const KTLImage = document.getElementById("KTLImage");
const SOLOImage = document.getElementById("SOLOImage");
const RImage = document.getElementById("RImage");
const BPImage = document.getElementById("BPImage");
const MEImage = document.getElementById("MEImage");
const LLImage = document.getElementById("LLImage");


// circle
let audioElementf = document.getElementById('SQAlbum');
let albumImageElementf = document.querySelector('#SQ img');

audioElementf.addEventListener('play', function() {
    albumImageElementf.classList.add('circle');
});

audioElementf.addEventListener('pause', function() {
    albumImageElementf.classList.remove('circle');
});

let audioElementf1 = document.getElementById('KTLAlbum');
let albumImageElementf1 = document.querySelector('#KTL img');

audioElementf1.addEventListener('play', function() {
    albumImageElementf1.classList.add('circle');
});

audioElementf1.addEventListener('pause', function() {
    albumImageElementf1.classList.remove('circle');
});

let audioElementf2 = document.getElementById('SOLOAlbum');
let albumImageElementf2 = document.querySelector('#SOLO img');

audioElementf2.addEventListener('play', function() {
    albumImageElementf2.classList.add('circle');
});

audioElementf2.addEventListener('pause', function() {
    albumImageElementf2.classList.remove('circle');
});

let audioElementf3 = document.getElementById('RAlbum');
let albumImageElementf3 = document.querySelector('#R img');

audioElementf3.addEventListener('play', function() {
    albumImageElementf3.classList.add('circle');
});

audioElementf3.addEventListener('pause', function() {
    albumImageElementf3.classList.remove('circle');
});


let audioElementf4 = document.getElementById('BPAlbum');
let albumImageElementf4 = document.querySelector('#BP img');

audioElementf4.addEventListener('play', function() {
    albumImageElementf4.classList.add('circle');
});

audioElementf4.addEventListener('pause', function() {
    albumImageElementf4.classList.remove('circle');
});


let audioElementf5 = document.getElementById('MEAlbum');
let albumImageElementf5 = document.querySelector('#ME img');

audioElementf5.addEventListener('play', function() {
    albumImageElementf5.classList.add('circle');
});

audioElementf5.addEventListener('pause', function() {
    albumImageElementf5.classList.remove('circle');
});


let audioElementf6 = document.getElementById('LLAlbum');
let albumImageElementf6 = document.querySelector('#LL img');

audioElementf6.addEventListener('play', function() {
    albumImageElementf6.classList.add('circle');
});

audioElementf6.addEventListener('pause', function() {
    albumImageElementf6.classList.remove('circle');
});


//Audio Function Progress Bar, Play/Pause
document.querySelectorAll('.play-button').forEach(function (image) {
    var albumId = image.id + 'Album';
    var audioElement = document.getElementById(albumId);
    var progress = document.getElementById('progress' + image.id);

    var songIntervals = {
        SQAlbum: [
            { id: "ddudu", start: 0.4, end: 186 },
            { id: "foreverYoung", start: 186, end: 386 },
            { id: "really", start: 386, end: 590 },
            { id: "seeULater", start: 590, end: 841 }
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
            SQImage.title = "Pause"; // for 'pause' upon hover sa image
            KTLImage.title = "Pause";
            SOLOImage.title = "Pause";
            RImage.title = "Pause";
            BPImage.title = "Pause";
            MEImage.title = "Pause";
            LLImage.title = "Pause";
        } else {
            audioElement.pause();
            SQImage.title = "Play"; // for 'play' text upon hover sa image
            KTLImage.title = "Play";
            SOLOImage.title = "Play";
            RImage.title = "Play";
            BPImage.title = "Play";
            MEImage.title = "Play";
            LLImage.title = "Play";
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







