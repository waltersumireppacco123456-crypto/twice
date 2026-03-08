const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const songTitle = document.getElementById("song-title");
const cover = document.getElementById("cover");

let isPlaying = false;

let songs = [

{title:"Cheer Up",file:"cheer-up.mp3",cover:"imagenes/cheer-up.jpg"},
{title:"Fancy",file:"twice-fancy.mp3",cover:"imagenes/fancy.jpg"},
{title:"Likey",file:"twice-likey.mp3",cover:"imagenes/likey.jpg"},
{title:"Signal",file:"twice-signal.mp3",cover:"imagenes/signal.jpg"},
{title:"What is Love",file:"what-is-love.mp3",cover:"imagenes/what-is-love.jpg"},
{title:"Alcohol Free",file:"twice-alcohol-free.mp3",cover:"imagenes/alcohol free.jpg"},
{title:"Candy Boy",file:"twice-candy-boy.mp3",cover:"imagenes/candy boy.jpg"},
{title:"Candy Pop",file:"twice-candy-pop.mp3",cover:"imagenes/candy pop.jpg"},
{title:"Feel Special",file:"twice-feel-special.mp3",cover:"imagenes/feel special.jpg"},
{title:"I'm Gonna Be A Star",file:"twice-im-gonna-be-a-star.mp3",cover:"imagenes/i'm gonna be a star.jpg"},
{title:"Jelly Jelly",file:"twice-jelly-jelly.mp3",cover:"imagenes/jelly jelly.jpg"},
{title:"Knock Knock",file:"twice-knock-knock.mp3",cover:"imagenes/knock knock.jpg"},
{title:"Like A Fool",file:"twice-like-a-fool.mp3",cover:"imagenes/like a fool.jpg"},
{title:"More & More",file:"twice-more-and-more.mp3",cover:"imagenes/more and more.jpg"},
{title:"Queen Of Hearts",file:"twice-queen-of-hearts.mp3",cover:"imagenes/queen of hearts.jpg"},
{title:"This Is For",file:"twice-this-is-for.mp3",cover:"imagenes/this is for.jpg"},
{title:"Touchdown",file:"twice-touchdown.mp3",cover:"imagenes/touchdown.jpg"},
{title:"TT",file:"twice-tt.mp3",cover:"imagenes/tt.jpg"},
{title:"Yes Or Yes",file:"twice-yes-or-yes.mp3",cover:"imagenes/yes or yes.jpg"}

];

let currentSong = 0;

function loadSong(index){

audio.src = songs[index].file;
songTitle.textContent = songs[index].title;
cover.src = songs[index].cover;

}

function selectSong(index){

currentSong = index;
loadSong(currentSong);

audio.play();

playBtn.textContent="⏸";
isPlaying=true;

}

playBtn.onclick = ()=>{

if(isPlaying){

audio.pause();
playBtn.textContent="▶";

}else{

audio.play();
playBtn.textContent="⏸";

}

isPlaying=!isPlaying;

};

function nextSong(){

currentSong++;

if(currentSong >= songs.length){
currentSong = 0;
}

loadSong(currentSong);
audio.play();

}

function prevSong(){

currentSong--;

if(currentSong < 0){
currentSong = songs.length - 1;
}

loadSong(currentSong);
audio.play();

}

audio.addEventListener("ended",()=>{
nextSong();
});

audio.addEventListener("timeupdate",()=>{

if(audio.duration){

let percent = (audio.currentTime / audio.duration) * 100;

progress.value = percent;

let min = Math.floor(audio.currentTime/60);
let sec = Math.floor(audio.currentTime%60);

if(sec<10) sec="0"+sec;

currentTime.textContent=min+":"+sec;

let durMin = Math.floor(audio.duration/60);
let durSec = Math.floor(audio.duration%60);

if(durSec<10) durSec="0"+durSec;

duration.textContent=durMin+":"+durSec;

}

});

progress.addEventListener("input",()=>{

audio.currentTime = (progress.value/100) * audio.duration;

});

function showSongs(){

document.getElementById("home").style.display="none";
document.getElementById("songs").style.display="block";

}

function showHome(){

document.getElementById("songs").style.display="none";
document.getElementById("home").style.display="block";

}
function zoomChaeyoung(){

const img = document.querySelector(".bias-img");

img.classList.toggle("zoom");


}
loadSong(currentSong);


