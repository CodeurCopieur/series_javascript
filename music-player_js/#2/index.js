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

      autoPlay = document.querySelector('.play-all'),

      hamBurger = document.querySelector('.fa-bars'),
      closeIcon = document.querySelector('.fa-times'),

      musicPlaylist = document.querySelector('.music-playlist'),
      playlist = document.querySelector('.playlist');

var timer,
    autoplay = 0,
    indexTrack = 0,
    songIsPlaying = false,
    track = document.createElement('audio');

// All Event Listeners
play.addEventListener('click', justPlay)

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