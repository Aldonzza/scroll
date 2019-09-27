window.addEventListener('scroll', function () {

    var video = document.getElementById("video");
    //video ofset top
    var posVideo = video.offsetTop;
    var currentScroll = window.pageYOffset;
    var windowheight = window.innerHeight;
    var alturaVideo = video.offsetHeight;


    if (posVideo + alturaVideo < currentScroll + windowheight &&
        posVideo > currentScroll
    ) {
        video.classList.add("play");
    } else {

        video.classList.remove("play");
    }

    //console.log("posVideo", posVideo);
    //console.log("currentScroll", currentScroll);
    //console.log("windowheight", windowheight);
});