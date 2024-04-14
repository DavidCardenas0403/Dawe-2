// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
// Create the audio element for the player
let curr_track = document.createElement('audio');
// Define the list of tracks that have to be played
let track_list = [
  {
    id: '4k',
    name: '4K',
    artist: 'El Alfa',
    image: './images/4k.jpg',
    path: './music/4K.mp3',
  },
  {
    id: 'bandido',
    name: 'Bandido',
    artist: 'Anuel AA',
    image: './images/bandido.jpg',
    path: './music/bandido.mp3',
  },
  {
    id: 'mi-error',
    name: 'Mi error',
    artist: 'Eladio Carrión',
    image: './images/miError.jpeg',
    path: './music/miError.mp3',
  },
  {
    id: 'oye-bb',
    name: 'Oye BB',
    artist: 'Omar Montes - Nicky Jam',
    image: './images/oyebb.webp',
    path: './music/oyebb.mp3',
  },
  {
    id: 'tanta-droga',
    name: 'Tanta droga',
    artist: 'Eladio Carrión',
    image: './images/tantaDroga.jpeg',
    path: './music/tantaDroga.mp3',
  },
  {
    id: 'triste-verano',
    name: 'Triste verano',
    artist: 'Eladio Carrión - Anuel AA',
    image: './images/tristeVerano.jpg',
    path: './music/tristeVerano.mp3',
  },
  {
    id: 'se-lo-que-hicisteis',
    name: 'Sé lo que hicisteis',
    artist: 'Melendi',
    image: './images/melendi.jpeg',
    path: './music/slqh.mp3',
  },
  {
    id: 'otra-vibra',
    name: 'Otra vibra',
    artist: 'Luar la L - Ozuna',
    image: './images/otraVibra.jpg',
    path: './music/otraVibra.mp3',
  },
  {
    id: 'bzrp-music-session-58',
    name: 'BZRP Music Session #58',
    artist: 'Young Miko - Bizarrap',
    image: './images/youngMiko.jpg',
    path: './music/youngMiko.mp3',
  },
  {
    id: 'sin-noticias-de-holanda',
    name: 'Sin noticias de Holanda',
    artist: 'Melendi',
    image: './images/melendi.jpeg',
    path: './music/sndh.mp3',
  },
];

function renderModalSongs(track_list) {
  const modalContent = document.getElementById('modal-content');
  track_list.map((song, index) => {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'justify-content-between'
    );

    const div = document.createElement('div');
    div.classList.add('d-flex', 'align-items-center', 'gap-3');
    const h6 = document.createElement('h6');
    h6.classList.add('m-0');
    h6.textContent = song.name;
    const p = document.createElement('p');
    p.classList.add('m-0');
    p.textContent = song.artist;

    div.appendChild(h6);
    div.appendChild(p);

    li.appendChild(div);

    const svg = document.createElement('svg');
    svg.innerHTML = `<svg
    class='play-btn'
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 24 24'
  >
    <path
      fill='#9a9a9a'
      d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'
    />
  </svg>`;
    svg.addEventListener('click', () => {
      if (index === track_index) {
        playpauseTrack();
      } else {
        loadTrack(index);
        track_index = index;
        playTrack();
      }
      console.log(index);
      console.log(track_index);
    });
    li.appendChild(svg);
    /* li.appendChild(`<svg
    class='play-btn'
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 24 24'
  >
    <path
      fill='#9a9a9a'
      d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'
    />
  </svg>`); */

    modalContent.appendChild(li);
  });
}

renderModalSongs(track_list);

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  // Update details of the track
  track_art.style.backgroundImage =
    'url(' + track_list[track_index].image + ')';
  track_name.textContent = track_list[track_index].name;
  track_name.setAttribute(
    'href',
    window.location.href + '/' + track_list[track_index].id
  );
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    'PLAYING ' + (track_index + 1) + ' OF ' + track_list.length;
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener('ended', nextTrack);
  // Apply a random background color
  random_bg_color();
}
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  // Construct a color withe the given values
  let bgColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  // Set the background to the new color
  document.body.style.background = bgColor;
}
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = '00:00';
  total_duration.textContent = '00:00';
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length - 1;
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
function seekUpdate() {
  let seekPosition = 0;
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );
    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }
    // Display the updated duration
    curr_time.textContent = currentMinutes + ':' + currentSeconds;
    total_duration.textContent = durationMinutes + ':' + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);
