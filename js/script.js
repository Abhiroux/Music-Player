console.log("Welcome to My Music World");

//variables
let songIndex=0;
let songs=[
    {songName:"► Imagine Dragons - Believer", filePath:"../songs/► Imagine Dragons - Believer (with lyrics)(MP3_320K).mp3", coverPath:"../images/beliver-cover.jpg"},
    {songName:"All Falls Down - Alan Walker", filePath:"../songs/Alan Walker - All Falls Down (Live Performance at YouTube Space NY with Noah Cyrus _ Juliander)(MP3_320K).mp3", coverPath:"../images/all_falls_down.jpg"},
    {songName:"Darkside - Alan Walker", filePath:"../songs/Alan Walker - Darkside (feat. Au_Ra and Tomine Harket)(MP3_320K).mp3", coverPath:"../images/darkside.jpg"},
    {songName:"Intentions - justin bieber", filePath:"../songs/Justin Bieber - Intentions (Official Video (Short Version)) ft. Quavo(MP3_320K).mp3", coverPath:"../images/intensions.png"},
    {songName:"Lily-Alan Walker_K-391-Emelie Hollow",filePath:"songs/Alan Walker_ K-391 _ Emelie Hollow - Lily (Lyrics)(MP3_320K).mp3",coverPath:"images/Lily.jpg"},
    {songName:"HVME - GOOSEBUMPS ",filePath:"songs/HVME - GOOSEBUMPS (Official Video)(MP3_320K).mp3",coverPath:"images/goosebumps.jpg"},
    {songName:"Ignite - K-391 _ Alan Walker",filePath:"songs/K-391 _ Alan Walker - Ignite (feat. Julie Bergan _ Seungri)(MP3_320K).mp3",coverPath:"images/Ignite.jpg"},
    {songName:"Close Your Eyes",filePath:"songs/KSHMR x Tungevaag - Close Your Eyes [Official Lyric Video](MP3_320K).mp3",coverPath:"images/close_your_eyes.jpg"},
    {songName:"Girls Like You",filePath:"songs/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)(MP3_320K).mp3",coverPath:"images/girls like you.jpg"},
    {songName:"Memories - Maroon 5",filePath:"songs/Maroon 5 - Memories (Official Video)(MP3_320K).mp3",coverPath:"images/memories.jpg"},
    {songName:"Me and My Broken Heart",filePath:"songs/Rixton - Me and My Broken Heart (Official Video)(MP3_320K).mp3",coverPath:"images/me_and_my_broken_heart.jpg"},
    {songName:"Wolves - Selena Gomez_ Marshmello",filePath:"songs/Selena Gomez_ Marshmello - Wolves(MP3_320K).mp3",coverPath:"images/wolves.jpg"},
    {songName:"Trampoline - SHAED x ZAYN",filePath:"songs/SHAED x ZAYN - Trampoline (Lyrics)(MP3_320K).mp3",coverPath:"images/trampoline.jpg"},
]
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songdisplay = document.getElementById("songdisplay");
let next=document.getElementById('next');
let previous=document.getElementById('previous');
let equlizer=document.getElementById('equlizer');
let songItems=Array.from(document.getElementsByClassName('media-body'));
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let coverStamp = document.getElementById("coverStamp");
let volumeBar =  document.getElementById("volumeBar");


//let audioElement= new Audio('../songs/Alan Walker - Darkside (feat. Au_Ra and Tomine Harket)(MP3_320K).mp3');
//audioElement.play();
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songtitle")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        equlizer.style.opacity=0;
        coverStamp.src=songs[songIndex].coverPath;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    //seekbar update;
    progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    if(audioElement.currentTime==audioElement.duration){
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        equlizer.style.opacity=0;
        if(songIndex>=12){
            songIndex=0;
            audioElement.src=songs[songIndex].filePath;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            songdisplay.innerHTML=songs[songIndex].songName;
            equlizer.style.opacity=1;
            coverStamp.src=songs[songIndex].coverPath;
        }
        else{
            songIndex+=1;
            audioElement.src=songs[songIndex].filePath;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            songdisplay.innerHTML=songs[songIndex].songName;
            equlizer.style.opacity=1;
            coverStamp.src=songs[songIndex].coverPath;
        }
    }
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value/100)*audioElement.duration;
});
//Next Button Functionality
next.addEventListener("click",()=>{
    if(songIndex>=12){
        songIndex=0;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    }
    else{
        songIndex+=1;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    }
});


//Previous Button Functionality
previous.addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=12;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    }
    else{
        songIndex-=1;
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    }
});

songItems.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex=parseInt(element.id);
        audioElement.src=songs[songIndex].filePath;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songdisplay.innerHTML=songs[songIndex].songName;
        equlizer.style.opacity=1;
        coverStamp.src=songs[songIndex].coverPath;
    })
});

forward.addEventListener("click",()=>{
    audioElement.currentTime+=10;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
backward.addEventListener("click",()=>{
    audioElement.currentTime-=10;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

volumeBar.addEventListener("change",()=>{
    // console.log(volumeBar.value);
    let mediaVolume=volumeBar.value/100;
    audioElement.volume=mediaVolume;
    console.log(mediaVolume);
    if(mediaVolume==0){
        document.getElementById("volumeDropdown").classList.remove("fa-volume-high");
        document.getElementById("volumeDropdown").classList.add("fa-volume-off");
    }
    else if(mediaVolume<0.4 && mediaVolume>0){
        document.getElementById("volumeDropdown").classList.remove("fa-volume-off");
        document.getElementById("volumeDropdown").classList.add("fa-volume-low");
    }
    else{
        document.getElementById("volumeDropdown").classList.remove("fa-volume-off");
        document.getElementById("volumeDropdown").classList.remove("fa-volume-low");
        document.getElementById("volumeDropdown").classList.add("fa-volume-high");
    }
})