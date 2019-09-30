// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var isPlaying = false;

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
        if (!isPlaying) {
            player.playVideo();
            isPlaying = true;
        }
    } else {
        if (isPlaying) {
            isPlaying = false;
            player.pauseVideo();
        }


    });