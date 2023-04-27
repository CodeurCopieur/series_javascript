var play = document.querySelector('.play'),
      previous = document.querySelector('.prev'),
      next = document.querySelector('.next'),

      trackImage = document.querySelector('.track-image'),
      title = document.querySelector('.title'),
      artist = document.querySelector('.artist'),

      trackCurrentTime = document.querySelector('.current-time'),
      trackDuration = document.querySelector('.duration-time'),
      slider = document.querySelector('.duration-slider'),

      currentVolume = document.querySelector('#volume'),
      showVolume = document.querySelector('#show-volume'),
      iconVolume = document.querySelector('#volume-icon'),

      autoPlayBtn = document.querySelector('.play-all'),

      hamBurger = document.querySelector('.fa-bars'),
      closeIcon = document.querySelector('.fa-times'),

      musicPlaylist = document.querySelector('.music-playlist'),
      playlist = document.querySelector('.playlist');

var timer,
    autoplay = 0,
    indexTrack = 0,
    songIsPlaying = false,
    track = document.createElement('audio');

    currentVolume.value = 50;

// All Event Listeners
play.addEventListener('click', justPlay)
next.addEventListener('click', nextSong)
previous.addEventListener('click', prevSong)
autoPlayBtn.addEventListener('click', autoPlayToggle)
iconVolume.addEventListener('click', muteSecond)
currentVolume.addEventListener('click', changeVolume)

// Load Tracks
function loadTrack(indexTrack) {
  track.src = trackList[indexTrack].path
  trackList.src = trackList[indexTrack].img
  title.innerHTML = trackList[indexTrack].name
  artist.innerHTML = trackList[indexTrack].singer

  track.load()
}
loadTrack(indexTrack)

// Play Song or Pause Song
function justPlay() {
  if(songIsPlaying == false) {
    playSong()
  } else {
    pauseSong()
  }
}



// Play Song
function playSong() {
  track.play()
  songIsPlaying = true
  play.innerHTML = '<i class="fas fa-pause"></i>'
}

// Pause Song
function pauseSong() {
  track.pause()
  songIsPlaying = false
  play.innerHTML = '<i class="fas fa-play"></i>'
}

// Next Song
function nextSong() {
  if (indexTrack < trackList.length - 1) {
    indexTrack++;
    loadTrack(indexTrack)
    playSong()
  } else {
    indexTrack = 0;
    loadTrack(indexTrack)
    playSong()
  }
}

// Prev Song
function prevSong() {
  if (indexTrack > 0) {
    indexTrack--;
    loadTrack(indexTrack)
    playSong()
  } else {
    indexTrack = trackList.length - 1;
    loadTrack(indexTrack)
    playSong()
  }
}

// Auto Play Toggle
function autoPlayToggle() {
  if (autoplay === 0) {
    autoplay = 1;
    autoPlayBtn.style.background = "#db6400";
  } else {
    autoplay = 0;
    autoPlayBtn.style.background = "#ccc";
  }
}

// Mute Sound
function muteSecond() {
  track.volume = 0;
  showVolume.innerHTML = 0;
  currentVolume.value = 0;
  iconVolume.classList.replace('fa-volume-up', 'fa-volume-mute')
}

// Change Volume
function changeVolume() {
  showVolume.innerHTML = currentVolume.value;
  track.volume = currentVolume.value / 100;
}