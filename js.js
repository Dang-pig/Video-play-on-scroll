vid = document.getElementById("vid");
vid.pause();
window.onscroll = function () {
    vid.pause()
}
setInterval(function(){
    if(window.pageYOffset >= 84936){
        //make vid position current position
        vid.style.position = "absolute";
        vid.style.top = 84936 + "px";
    }
    else{
        vid.style.position = "fixed";
        vid.style.top = 0;
    }
}, 1);
var renderLoop = function () {
    requestAnimationFrame(function () {
        vid.currentTime = window.pageYOffset / 400;
        renderLoop();
    });
};
renderLoop();