'use strict'

const li    = document.querySelectorAll('.li')
const bloque   = document.querySelectorAll('.bloque')

li.forEach( (cadaLi, i)=>{
    li[i].addEventListener('click', ()=>{
        li.forEach( (cadaLi, i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})

const slider = document.querySelector('.slider')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const indicatorParents = document.querySelector('.controles ul');
var sectionIndex = 0;

function setIndex(){
    document.querySelector('.controles .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
}

document.querySelectorAll('.controles li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 1;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
});

let currentMusic = 0;
const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disc = document.querySelector('.disc');
const currentTime = document.querySelector('.current-time');
const currentmusicDuration = document.querySelector('.song-duration');
const musicDuration = document.querySelector('.song-duration');
const playbtn = document.querySelector('.play-btn');
const forwardbtn = document.querySelector('.forward-btn');
const backwardbtn = document.querySelector('.backward-btn');

playbtn.addEventListener('click', () =>{
    playbtn.classList.toggle('pause');
    disc.classList.toggle('play');
})

const setMusic = (i) =>{
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disc.style.backgroundImage = `url('${song.cover}')`;
}
setMusic(0);