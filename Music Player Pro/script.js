let arr = [
    {
      songName: "Tum Hi Ho",
      artist: "Arijit Singh, Mithoon",
      url: "./songs/01 - Tum Hi Ho.mp3",
      img: "./images/tum hi ho.jpeg",
    },
    {
      songName: "Chahun Main Ya Naa",
      artist: "Arijit Singh, Palak Muchhal",
      url: "./songs/02 - Chahun Main Ya Naa.mp3",
      img: "./images/chahu mein ya na.jpeg",
    },
    {
      songName: "Hum Mar Jayenge",
      artist: "Arijit Singh, Tulsi Kumar",
      url: "./songs/03 - Hum Mar Jayenge.mp3",
      img: "./images/hum mar jayenge.jpeg",
    },
    {
      songName: "Meri Aashiqui",
      artist: "Arijit Singh, Palak Muchhal",
      url: "./songs/04 - Meri Aashiqui.mp3",
      img: "./images/meri aashiqui.jpeg",
    },
    {
      songName: "Piya Aaye Na",
      artist: "Tulsi Kumar, K.K",
      url: "./songs/05 - Piya Aaye Na.mp3",
      img: "./images/piy aaaye na.jpeg",
    },
    {
      songName: "Bhula Dena Mujhe",
      artist: "Mustafa Zahid",
      url: "./songs/06 - Bhula Dena.mp3",
      img: "./images/bhula dena.jpeg",
    },
    {
      songName: "Sun Raha Hai - Female",
      artist: "Shreya Ghoshal",
      url: "./songs/07 - Sunn Raha Hai - Female.mp3",
      img: "./images/sun raha hau na tu.jpeg",
    },
  ];
  
  let allSongs = document.querySelector("#all-songs");
  let poster = document.querySelector("#main #btm-in");
  
  let play = document.querySelector("#play");
  let backward = document.querySelector("#backward");
  let forward = document.querySelector("#forward");
  let btmIn = document.getElementById("btm-in");
  
  let audio = new Audio();
  
  let selectedSong = 0;
  
  function songList() {
    let clutter = "";
    arr.forEach((item, index) => {
      clutter += `<div class="song-card" id=${index}>
                      <div class="song-card-item">
                          <div class="card-image">
                          <img src="${item.img}" alt="song" srcset="">
                          </div>
                          <div class="song-details">
                              <h4>${item.songName}</h4>
                              <h5>${item.artist}</h5>
                          </div>
                      </div>
                      <div class="song-duration">
                          <p>3:36</p>
                      </div>
                  </div>`;
    });
    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url('${arr[selectedSong].img}')`;
  //   console.log(arr[selectedSong].img);
  }
  songList();
  
  allSongs.addEventListener("click", (e) => {
    selectedSong = e.target.id;
    songList();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    audio.play();
  //   console.log(selectedSong);
  });
  
  let flag = 0;
  
  function startRotation() {
    btmIn.classList.add("rotate");
  }
  
  function stopRotation() {
    btmIn.classList.remove("rotate");
  }
  
  play.addEventListener("click", function () {
    if (flag == 0) {
      play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      songList();
      audio.play();
      startRotation();
      flag = 1;
    } else {
      play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
      songList();
      audio.pause();
      stopRotation();
      flag = 0;
    }
    console.log(flag);
  });
  
  forward.addEventListener("click", function () {
    selectedSong = (selectedSong + 1) % arr.length;
    songList();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    startRotation();
    flag = 1;
  });
  
  backward.addEventListener("click", function () {
    selectedSong = (selectedSong - 1 + arr.length) % arr.length;
    songList();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    startRotation();
    flag = 1;
  });
  
  audio.addEventListener("ended", () => {
    selectedSong = (selectedSong + 1) % arr.length;
    songList();
    audio.play();
    startRotation();
    flag = 1;
  });