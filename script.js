console.log("Welcome to Spotify")

let songsIndex=0;
let audioElement= new Audio("/songs/1.mp3");
let masterPlay= document.getElementById("masterPlay");
let progressBar= document.getElementById("myseekbar");
let gif= document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songitems"));
let songInfo=document.getElementById("songInfo");


let songs=[
    {songName:"Dokha(Song by Arijit Singh and Manan Bhardwaj)",filePath:"songs/Dokha.mp3",coverPath:"cover/cover1.jpg"},
    {songName:"Har Har Shambhu(Abhilipsa Panda,Jeetu Sharma)",filePath:"songs/harhar.mp3",coverPath:"cover/cover3.jpg"},
    {songName:"Hum Nashe Mein Toh Nahin(Arijit Singh,Tulsi Kumar)",filePath:"songs/nasheMein.mp3",coverPath:"cover/cover5.jpg"},
    {songName:"Kesariya(Arijit Singh)",filePath:"songs/Kesariya.mp3",coverPath:"cover/cover2.jpg"},
    {songName:"Kithe Chaliye Tu(Jubin Nautiyal, Asees Kaur)",filePath:"songs/rataanlambiyan.mp3",coverPath:"cover/cover6.jpg"},
    {songName:"Meri Tarah(Jubin Nautiyal, Payal Dev)",filePath:"songs/meriTarah.mp3",coverPath:"cover/cover7.jpg"},
    {songName:"Srivalli(Javed Ali)",filePath:"songs/Srivalli.mp3",coverPath:"cover/cover8.jpg"},
    {songName:"Bedardi(Jubin Nautiyal)",filePath:"songs/Bedardi.mp3",coverPath:"cover/cover9.jpg"},
    {songName:"Heer Raanjhana(Arijit Singh, Shreya Ghoshal)",filePath:"songs/heer.mp3",coverPath:"cover/cover4.jpg"},
]

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play");
    })
}
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log("timeUpdate");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
    if(progress==100){
        if(songsIndex>=8){
            songsIndex=0;
        }
        else{
            songsIndex+=1;
        }
        gif.style.opacity=1;
        audioElement.src=`/songs/${songsIndex+1}.mp3`;
        songInfo.innerText=songs[songsIndex].songName;
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
})


Array.from(document.getElementsByClassName("songItemsPlay")).forEach((elements)=>{
    elements.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        songsIndex=parseInt(e.target.id);
        gif.style.opacity=1;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`/songs/${songsIndex+1}.mp3`;
        songInfo.innerText=songs[songsIndex].songName;
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})


document.getElementById("next").addEventListener("click",()=>{
    if(songsIndex>=8){
        songsIndex=0;
    }
    else{
        songsIndex+=1;
    }
    gif.style.opacity=1;
    audioElement.src=`/songs/${songsIndex+1}.mp3`;
    songInfo.innerText=songs[songsIndex].songName;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("prev").addEventListener("click",()=>{
    if(songsIndex<=0){
        songsIndex=0;
    }
    else{
        songsIndex-=1;
    }
    gif.style.opacity=1;
    makeAllPlay();
    songItemsPlay.classList.remove("fa-circle-play");
    songItemsPlay.classList.add("fa-circle-pause");
    audioElement.src=`/songs/${songsIndex+1}.mp3`;
    songInfo.innerText=songs[songsIndex].songName;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

