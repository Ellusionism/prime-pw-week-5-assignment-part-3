console.log('***** Music Collection *****');

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let album = {
    title,
    artist,
    yearPublished,
  }
  collection.push(album);
  return album
}

console.log(addToCollection(`Blonde on Blonde`, `Bob Dylan`, 1966));console.log(addToCollection(`Brothers And Sisters`, `The Allman Brothers Band`, 1973));
console.log(addToCollection(`From The Muddy Banks Of The Wishkah`, `Nirvana`, 1996));
console.log(addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997));
console.log(addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013));
console.log(addToCollection(`Faces`, `Mac Miller`, 2014));
console.log(collection);

function showCollection (show) {
  console.log(`Number of albums in collection: ${show.length}`);
  for (let i = 0; i < show.length; i++) {
    console.log(`${show[i].title} by ${show[i].artist}, published in ${show[i].yearPublished}`);
  }
};

showCollection(collection);

function findByArtist (artist) {
  console.log(`Searching collection for songs by ${artist}...`);
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
  if (title == true && artist == true && yearPublished == true) {
    console.log(`Searching for $
    for (let i = 0; i < collection.length; i++) {

    }
  }
};
