function util_enterFullscreen() {
    if ((element = document.documentElement).mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullScreen) element.webkitRequestFullScreen();
    else if (elem.requestFullscreen) element.requestFullscreen();
    else if (elem.msRequestFullscreen) element.msRequestFullscreen();
}

function util_exitFullscreen() {
    if ((element = document.documentElement).mozCancelFullScreen) element.mozCancelFullScreen();
    else if (element.webkitExitFullScreen) element.webkitExitFullScreen();
    else if (elem.exitFullScreen) element.exitFullscreen();
    else if (elem.msExitFullScreen) element.msExitFullscreen();
}
