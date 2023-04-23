"use strict";

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