let video = document.querySelector('video');
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY;
    video.style.opacity = value;
})