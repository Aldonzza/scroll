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
        videoId: '5MqgW5JD4KE',
        playerVars: { 'autoplay': 0 },
    });
}

var isPlaying = false;

window.addEventListener('scroll', function (){
    var video = document.getElementById("video");
    var posVideo = video.offsetTop;
    var alturaVideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (posVideo + alturaVideo < currentScroll + windowHeight &&
        posVideo > currentScroll   
    ) {
        if(!isPlaying) {
            player.playVideo();
            isPlaying = true;
        } 
    } else {
        if(isPlaying){
            player.pauseVideo();
            isPlaying = false;
        } 
        
    }
});