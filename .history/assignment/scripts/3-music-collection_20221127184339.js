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

addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);
addToCollection(`Blonde on BLonde`, `Bob Dylan`, 1966);
addToCollection(`Brothers And Sisters`, `The Allman Brothers Band`, 1973);
addToCollection(`From The Muddy Banks Of The Wishkah`, `Nirvana`, 1996);
addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013);
addToCollection(`Buena Vista Social Club`, `Mac Miller`, 1997);

