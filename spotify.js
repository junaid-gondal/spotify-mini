console.log("welcome to spotify");
let audioelement= new Audio('1.m4a');
let songidex=0;
let masterPlay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let song=[
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a", coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
    {songname:"salam  ishq " , filepath:"song/1.m4a" , coverpath:"cover/1.jpg"},
]

masterPlay.addEventListener('click',()=>
{
    if(audioelement.paused|| audioelement.currentTime<=0)
    {
        audioelement.play();
         masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    }
    else
    {      audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');}
    gif.style.opacity=0;
})

audioelement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>
{
    audioelement.currentTime=myprogressBar.value * audioelement.duration / 100;
})