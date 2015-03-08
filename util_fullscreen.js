function util_enterFullscreen() {
    var element = document.documentElement;
    try {
        element.mozRequestFullScreen();
        element.webkitRequestFullScreen();
        element.requestFullscreen();
        element.msRequestFullscreen();
    } catch (e) {}
}

function util_exitFullscreen() {
    var element = document.documentElement;
    try {
        element.mozCancelFullScreen();
        element.webkitExitFullScreen();
        element.exitFullscreen();
        element.msExitFullscreen();
    } catch (e) {}
}