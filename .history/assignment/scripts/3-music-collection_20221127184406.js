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
addToCollection(`Brothers And Sisters`, `The Allman Brothers Band`, 1973);
addToCollection(`From The Muddy Banks Of The Wishkah`, `Nirvana`, 1996);
addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013);
addToCollection(`Faces`, `Mac Miller`, 2014);

