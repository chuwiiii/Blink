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