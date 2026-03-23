const audioPlayer = document.getElementById('audioPlayer');
const songUpload = document.getElementById('songUpload');
const songTitle = document.getElementById('songTitle');
const progressBar = document.getElementById('progressBar');
const playlistDiv = document.getElementById('playlist');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = playPauseBtn.querySelector('i');

let tracks = [];
let currentIndex = -1;

songUpload.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);

  files.forEach(file => {
    if (!file.type.startsWith('audio/')) return;

    const track = {
      name: file.name,
      url: URL.createObjectURL(file)
    };

    tracks.push(track);
    addTrackToUI(track);

    if (currentIndex === -1) {
      playTrack(0);
    }
  });
});
function addTrackToUI(track) {
  const div = document.createElement('div');
  div.classList.add('track');
  div.textContent = track.name;

  div.addEventListener('click', () => {
    const index = tracks.findIndex(t => t.url === track.url);
    playTrack(index);
  });

  playlistDiv.appendChild(div);
}
function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;

  currentIndex = index;
  const track = tracks[index];

  audioPlayer.src = track.url;
  songTitle.textContent = track.name;

  audioPlayer.play();
  updateActiveTrack();
}
function updateActiveTrack() {
  const allTracks = document.querySelectorAll('.track');

  allTracks.forEach((el, i) => {
    el.classList.toggle('active', i === currentIndex);
  });
}
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});
audioPlayer.addEventListener('play', () => {
  playPauseIcon.classList.remove('fa-play');
  playPauseIcon.classList.add('fa-pause');
});

audioPlayer.addEventListener('pause', () => {
  playPauseIcon.classList.remove('fa-pause');
  playPauseIcon.classList.add('fa-play');
});
nextBtn.addEventListener('click', () => {
  if (currentIndex < tracks.length - 1) {
    playTrack(currentIndex + 1);
  }
});
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    playTrack(currentIndex - 1);
  }
});
audioPlayer.addEventListener('ended', () => {
  playPauseIcon.classList.remove('fa-pause');
  playPauseIcon.classList.add('fa-play');

  if (currentIndex < tracks.length - 1) {
    playTrack(currentIndex + 1);
  }
});
audioPlayer.addEventListener('timeupdate', () => {
  if (!audioPlayer.duration) return;

  progressBar.value =
    (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

progressBar.addEventListener('input', () => {
  if (!audioPlayer.duration) return;

  audioPlayer.currentTime =
    (progressBar.value / 100) * audioPlayer.duration;
});