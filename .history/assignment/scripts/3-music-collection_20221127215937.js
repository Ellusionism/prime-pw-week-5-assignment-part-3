console.log('***** Music Collection *****');

let collection = [];

let tracklist = [];

function addTrack (name, duration) {
  track = {
    name,
    duration,
  }
  tracklist.push(track);
}

function clearTracks() {
  tracklist.length = 0;
}

function addToCollection (title, artist, yearPublished, tracklist) {
  let album = {
    title,
    artist,
    yearPublished,
    tracklist,
  }
  collection.push(album);
  return album
}

console.log(addToCollection(`Blonde on Blonde`, `Bob Dylan`, 1966, tracklist));
clearTracks();

console.log(addToCollection(`Brothers And Sisters`, `The Allman Brothers Band`, 1973, tracklist));
clearTracks();

addTrack(`Intro`, `0:52`);
addTrack(`School`, `2:34`);
addTrack(`Drain You`, `3:35`);
addTrack(`Aneurysm`, `4:29`);
addTrack(`Smells Like Teen Spirit`, `4:40`);
addTrack(`Been A Son`, `2:07`);
addTrack(`Lithium`, `4:07`);
addTrack(`Sliver`, `1:56`);
addTrack(`Spank Thru`, `3:07`);
addTrack(`Scentless Apprentice`, `3:25`);
addTrack(`Heart-Shaped Box`, `4:42`);
addTrack(`Milk It`, `3:40`);
addTrack(`Negative Creep`, `2:44`);
addTrack(`Polly`, `2:27`);
addTrack(`Breed`, `3:12`);
addTrack(`Tourette's`, `1:55`);
addTrack(``, ``);
console.log(addToCollection(`From The Muddy Banks Of The Wishkah`, `Nirvana`, 1996, tracklist));
clearTracks();

addTrack(`Chan Chan`, `4:16`);
addTrack(`De Camino A La Vereda`, `5:03`);
addTrack(`El Cuarto De Tula`, `7:27`);
addTrack(`Pueblo Nuevo`, `6:05`);
addTrack(`Dos Gardenias`, `3:02`);
addTrack(`Y Tu Que Has Hecho?`, `3:13`);
addTrack(`Veinte Anos`, `3:29`);
addTrack(`El Carretero`, `3:28`);
addTrack(`Candela`, `5:27`);
addTrack(`Amor De Loca Juventud`, `3:21`);
addTrack(`Orgullecida`, `3:18`);
addTrack(`Murmullo`, `3:50`);
addTrack(`Buena Vista Social Club`, `4:50`);
addTrack(`La Bayamesa`, `2:54`);
console.log(addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997, tracklist));
clearTracks();

console.log(addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013));
clearTracks();

console.log(addToCollection(`Faces`, `Mac Miller`, 2014));
clearTracks();

console.log(collection);

function showCollection (show) {
  console.log(`Number of albums in collection: ${show.length}`);
  for (let i = 0; i < show.length; i++) {
    console.log(`${show[i].title} by ${show[i].artist}, published in ${show[i].yearPublished}`);
  }
};

showCollection(collection);

function findByArtist (artist) {
  console.log(`Searching collection for albums by ${artist}...`);
  let artistCollection = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistCollection.push(collection[i])
    }
  }
  if (artistCollection.length > 0) {
    console.log(artistCollection);
  } else {
    console.log(`No albums by that artist in this collection`);
  }
};

findByArtist(`Steely Dan`);
findByArtist(`Bob Dylan`);
findByArtist(`Mac Miller`);

function search(title, artist, yearPublished) {
  let searchCollection = [];
  console.log(`Search parameters: ${title}, ${artist}, ${yearPublished}`);
  if (title, artist, yearPublished) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].title === title && collection[i].artist === artist && collection[i].yearPublished === yearPublished) {
        searchCollection.push(collection[i]);
      }
    }
    if (searchCollection.length > 0) {
      console.log(`Results: `, searchCollection)
      return searchCollection;
    } else {
      console.log(`No results found`);
      return searchCollection;
    }
  } else {
    console.log (`Missing search parameters`);
    return collection;
  }
};

search(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);
search(`Swimming`, `Mac Miller`, 2018);
search(`Bob Dylan`, 1966);