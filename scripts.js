/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*url-name */
// console.log('Window Location:', window.location);
const too = window.location.search;
const urlParams = new URLSearchParams(too);
const param = urlParams.get('to');
const upTo = param[0].toUpperCase() + param.substring(1);;
// const upTo = param.capitalizeFirstLetter();
document.getElementById('to').innerHTML = upTo + '  <i class="fa-solid fa-heart"></i>';

//simply countdown
simplyCountdown(".simply-countdown", {
      year: 2024, // required
      month: 4, // required
      day: 13, // required
      hours: 8, // Default is 0 [0-23] integer
      minutes: 0, // Default is 0 [0-59] integer
      seconds: 0, // Default is 0 [0-59] integer
      words: {
        //words displayed into the countdown
        days: { singular: " hari", plural: "hari" },
        hours: { singular: " jam", plural: "jam" },
        minutes: { singular: " menit", plural: "menit" },
        seconds: { singular: " detik", plural: "detik" },
      },
    });

// tombol buka + audio
    const rootElement = document.querySelector(":root");
    const hero = document.getElementById('hero');
    const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
    const audioIcon = document.querySelector('.audio-icon');
    const song = document.querySelector('#song');

    function disableScroll() {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
      }
      rootElement.style.scrollBehavior = 'auto';
    }

    function enableScroll() {
      window.onscroll = function () {
      }
      rootElement.style.scrollBehavior = 'smooth';
      playAudio();
    }

    function playAudio() {
      // song.volume = 0.5;
      audioIconWrapper.style.display = 'flex';
      // hero.style.display = 'none';
      song.play();

      isPlaying = 'true';
    }

    audioIconWrapper.onclick = function () {
      if (isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-play-circle');
        audioIcon.classList.add('bi-pause-circle');
      } else {
        song.play();
        audioIcon.classList.add('bi-play-circle');
        audioIcon.classList.remove('bi-pause-circle');
      }

      isPlaying = !isPlaying;
    }

disableScroll();
        


