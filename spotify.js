console.log('My small spotify web')
let songsIndex=0;
let myaudioelement= new Audio('song1.mp3')
// myaudioelement.play();
let play=document.getElementById('play');
let progbar=document.getElementById('myprogbar');
let song=  Array.from(document.getElementsByClassName('song'));
let icon=Array.from(document.getElementsByClassName('icon'))

let previous=document.getElementById('previous')
let next=document.getElementById('next')

let songs=[
    {songname: "Khulke jeene ka",filepath:"song1.mp3",coverpath:"spotifybg.jpg" },
    {songname:"Brown Munde",filepath:"song2.mp3",coverpath:"images/song2.jpg"},
    { songname:"Calaboose",filepath:"song3.mp3",coverpath:"images/s3.jpg"},
    { songname:"295",filepath:"song4.mp3",coverpath:"images/s4.jpg"},
    { songname:"In the middle of  night",filepath:"song5.mp3",coverpath:"images/s5.jpg"},
    { songname:"Judge",filepath:"song6.mp3",coverpath:"images/song6.jpg"},
    { songname:"Teeji Seat",filepath:"song7.mp3",coverpath:"images/s7.jpg"},
    { songname:"La Casa De Papel",filepath:"song8.mp3",coverpath:"images/s8.jpg"},
    { songname:"Rauf Faik",filepath:"song9.mp3",coverpath:"images/s9.jpg"},
    { songname:"Excuses",filepath:"song10.mp3",coverpath:"images/s10.jpg"}
]
song.forEach(function (element, i) {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songkanaam")[0].innerText = songs[i].songname;

});

play.addEventListener('click',()=>{
if(myaudioelement.paused || myaudioelement.currentTime<=0)
{
    myaudioelement.play();
    console.log('song playing');
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}
else
{
    myaudioelement.pause();
    console.log('song paused');
    play.classList.add('fa-play');
    play.classList.remove('fa-pause');
}
}); 
myaudioelement.addEventListener('timeupdate',()=>{
console.log('time update');
let progress=parseInt((myaudioelement.currentTime/myaudioelement.duration)*100);
console.log(progress);
progbar.value=progress;
})
progbar.addEventListener('change',()=>{
myaudioelement.currentTime=(progbar.value*myaudioelement.duration)/100;

})
function makeallotherpause() {
    icon.forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    });
}
// On clicking play button,that specific song plays
icon.forEach(function (element) {
    element.addEventListener('click', (e) => {
        index=parseInt(e.target.id);
        makeallotherpause();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        myaudioelement.src=`song${index+1}.mp3`;
        myaudioelement.currentTime=0;
        myaudioelement.play();
        play.classList.remove('fa-play');
    play.classList.add('fa-pause');

    });
})
next.addEventListener('click',()=>{
if(index>8)
index=0;
else
index=index+1;
myaudioelement.src=`song${index+1}.mp3`;
        myaudioelement.currentTime=0;
        myaudioelement.play();
        play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    makeallotherpause();
        icon(`${index+1}`).classList.remove('fa-play');
        icon(`${index+1}`).classList.add('fa-pause');
   

})
previous.addEventListener('click',()=>{
if(index<1)
index=9;
else
index=index-1;
myaudioelement.src=`song${index+1}.mp3`;
        myaudioelement.currentTime=0;
        myaudioelement.play();
        play.classList.remove('fa-play');
    play.classList.add('fa-pause');

})