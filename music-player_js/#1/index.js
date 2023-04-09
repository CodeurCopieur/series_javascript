const musicContainer = document.querySelector('.component__music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#componentAudio')
const progress = document.querySelector('.component__progress')
const progressContainer = document.querySelector('.component__progress-container')
const title = document.querySelector('#componentMusicTitle')
const cover = document.querySelector('#cover')

// Titres des chansons
const songs = ['01HotRemix', '01TacoTuesday', '01Wow'];

// Gardez une trace de la chanson
let songIndex = 1;

// charger initialement les informations sur la chanson DOM
loadSong(songs[songIndex]);

// Mettre à jour les détails de la chanson
function loadSong(song) {
  title.textContent = song;
  audio.src = `./music/${song}.m4a`
  cover.src = `./img/${song}.jpg`
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('.bx').classList.remove('bx-play');
  playBtn.querySelector('.bx').classList.add('bx-pause');

  audio.play()
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('.bx').classList.add('bx-play');
  playBtn.querySelector('.bx').classList.remove('bx-pause');

  audio.pause()
}

function prevSong() {
 songIndex--

 songIndex < 0 ? songIndex = songs.length - 1 : null

 loadSong(songs[songIndex])

 playSong()
}

function nextSong() {
  songIndex++

  songIndex > songs.length - 1 ? songIndex = 0 : null;

  loadSong(songs[songIndex])

  playSong()
}

function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime/duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgess(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width ) * duration
}

// Ecouteur d'événement
playBtn.addEventListener('click', ()=> {

  const isPlaying = musicContainer.classList.contains('play');

  isPlaying ?  pauseSong() : playSong();
})


// Changer les événements de chanson
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgess)

audio.addEventListener('ended', nextSong)