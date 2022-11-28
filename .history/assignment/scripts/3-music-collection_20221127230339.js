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

addTrack(`Rainy Day Woman #12 & 35`, `4:35`);
addTrack(`Pledging My Time`, `3:55`);
addTrack(`Visions of Johanna`, `7:30`);
addTrack(`One Of Us Must Know (Sooner Or Later)`, `4:55`);
addTrack(`I Want You`, `3:10`);
addTrack(`Memphis Blues Again`, `7:07`);
addTrack(`Leopard-Skin Pill-Box Hat`, `3:50`);
addTrack(`Just Like A Woman`, `4:52`);
addTrack(`Most Likely You Go Your Way And I Go Mine`, `3:06`);
addTrack(`Temporary Like Achilles`, `5:03`);
addTrack(`Absolutely Sweet Marie`, `4:50`);
addTrack(`4th Time Around`, `4:43`);
addTrack(`Obviusly 5 Believers`, `3:31`);
addTrack(`Sad Eyed Lady Of The Lowlands`, `11:23`);
console.log(addToCollection(`Blonde on Blonde`, `Bob Dylan`, 1966, tracklist));
clearTracks();

addTrack(`Wasted Words`, `4:20`);
addTrack(`Ramblin Man`, `4:48`);
addTrack(`Come And Go Blues`, `4:55`);
addTrack(`Jelly Jelly`, `5:46`);
addTrack(`Southbound`, `5:10`);
addTrack(`Jessica`, `7:31`);
addTrack(`Pony Boy`, `5:51`);
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
addTrack(`Blew`, `3:36`);
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

addTrack(`The Star Room`, `4:35`);
addTrack(`Avian`, `3:16`);
addTrack(`I'm Not Real`, `3:23`);
addTrack(`S.D.S.`, `3:04`);
addTrack(`Bird Call`, `2:08`);
addTrack(`Matches`, `2:58`);
addTrack(`I Am Who I Am (Killin' Time)`, `5:00`);
addTrack(`Objects In The Mirror`, `4:18`);
addTrack(`Red Dot Music`, `6:07`);
addTrack(`Gees`, `2:55`);
addTrack(`Watching Movies`, `3:40`);
addTrack(`Suplexes Inside Of Complexes And Duplexes`, `2:47`);
addTrack(`REMember`, `4:27`);
addTrack(`Someone Like You`, `4:16`);
addTrack(`Aquarium`, `4:38`);
addTrack(`Youforia`, `4:00`);
addTrack(`Goosebumpz`, `3:21`);
console.log(addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013));
clearTracks();

addTrack(`Inside Outside`, `1:55`);
addTrack(`Here We Go`, `2:48`);
addTrack(`Friends`, `6:38`);
addTrack(`Angel Dust`, `3:43`);
addTrack(`Malibu`, `3:31`);
addTrack(`What Do You Do`, `3:50`);
addTrack(`It Just Doesn't Matter`, `3:57`);
addTrack(`Therapy`, `4:10`);
addTrack(`Polo Jeans`, `3:42`);
addTrack(`Happy Birthday`, `2:53`);
addTrack(`Wedding`, `4:10`);
addTrack(`Funeral`, `3:44`);
addTrack(`Diablo`, `3:18`);
addTrack(`Ave Maria`, `2:56`);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
addTrack(``, ``);
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