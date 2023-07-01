function getArrayRandomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function printDescription(str) {
  let cardDescription = document.getElementById("card-description");
  let moreButton = document.getElementById("more-button");

  let letterTimeout = 15;
  let letterIndex = 0;

  let intervaltId = setInterval(() => {
    if (str[letterIndex]) {
      cardDescription.textContent = str.substr(0, letterIndex + 1);
      letterIndex++;
    } else {
      clearInterval(intervaltId);

      moreButton.style.display = "block";
    }
  }, letterTimeout);

  return intervaltId;
}

const OPENING_ANIMATION_CARD_CLASS = "layout-page__card--opened";
const CLOSING_ANIMATION_CARD_CLASS = "layout-page__card--closed";

let currentArtist = null;

let descriptionIntervalId = null;

let createPlaylistButton = document.getElementById("create-playlist-button");
let moreButton = document.getElementById("more-button");

let greetingsText = document.getElementById("greetings-text");

let musicLinks = document.getElementById("music-links");

let card = document.getElementById("card");
let cardImage = document.getElementById("card-image");

createPlaylistButton.addEventListener("click", () => {
  moreButton.style.display = "none";
  musicLinks.style.display = "none";

  clearInterval(descriptionIntervalId);

  const addArtistData = () => {
    let randomIndex = getArrayRandomIndex(ARTISTS);
    currentArtist = ARTISTS[randomIndex];

    cardImage.src = `assets/images/${currentArtist.image}`;
    descriptionIntervalId = printDescription(currentArtist.description);
  };

  if (card.classList.contains(OPENING_ANIMATION_CARD_CLASS)) {
    card.classList.add(CLOSING_ANIMATION_CARD_CLASS);
    setTimeout(() => {
      card.classList.remove(CLOSING_ANIMATION_CARD_CLASS);

      addArtistData();
    }, 300);
  } else {
    greetingsText.style.display = "none";

    card.style.display = "flex";
    card.classList.add(OPENING_ANIMATION_CARD_CLASS);

    addArtistData();
  }
});

let bestSongLink = document.getElementById("best-song-link");
let bestSongsLink = document.getElementById("best-songs-link");
let bestAlbumLink = document.getElementById("best-album-link");

moreButton.addEventListener("click", () => {
  moreButton.style.display = "none";
  musicLinks.style.display = "flex";

  bestSongLink.href = currentArtist.song;
  bestSongsLink.href = currentArtist.songs;
  bestAlbumLink.href = currentArtist.album;
});
