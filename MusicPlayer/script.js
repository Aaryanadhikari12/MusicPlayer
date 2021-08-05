const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const songs =[
{
img:"ncm",
name:"abc",
title:"Jarico Landscape",
artist:"Music Only"
},
{
img:"image 14", 
name:"audio3",
title:"Sayau Thunga",
artist:"Pradeep Kumar Rai",
},
{
img:"image 3-2",
name:"audio2",
title:"Lut Gaye",
artist:"Jubin Nautiyal",
},
{
img:"image 2",
name:"audio",
title:"Teri Mitti",
artist:"B Praak",
},
{
img:"image-2",
name:"audio4",
title:"Nepali Hami",
artist:"Nati Kaji",
},
{
img:"image 4-1",
name:"audio5",
title:"Jaga Lamka",
artist:"Ram Krishna Dhakal",
}
]

    
let isPlaying=false;
//for play functionthe part goes downside

    const playMusic = () => {
        
isPlaying=true;
music.play();
      play.classList.replace('fa-play',"fa-pause");
      img.classList.add("anime"); 
      };
    
//for pause function the data goes downside
const pauseMusic = () => {
        
isPlaying=false;
music.pause();
      play.classList.replace("fa-pause", "fa-play");
      img.classList.remove("anime"); 
      };

play.addEventListener("click",() => {
if(isPlaying){
pauseMusic();
}
else{
playMusic();
}
})

//changing music data function goes downside
const loadSong = (songs) => {
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src=songs.name+".mp3";

img.src= songs.img+".png";
};
songIndex=0;
 
 //loadSong(songs[2]);

const nextSong = () =>{
 songIndex=(songIndex+1)%songs.length;
loadSong(songs[songIndex]);
playMusic();
}

const prevSong = () =>{
 songIndex=(songIndex-1+songs.length)%songs.length;
loadSong(songs[songIndex]);
playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);


   
