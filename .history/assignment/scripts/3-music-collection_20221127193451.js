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

console.log(addToCollection(`Brothers And Sisters`, `The Allman Brothers Band`, 1973))console.log(addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997));

console.log(addToCollection(`From The Muddy Banks Of The Wishkah`, `Nirvana`, 1996));
console.log(addToCollection(`Watching Movies With The Sound Off`, `Mac Miller`, 2013));
console.log(addToCollection(`Faces`, `Mac Miller`, 2014));
console.log(addToCollection(`Swimming`, `Mac Miller`, 2018));
console.log(collection);

function showCollection (show) {
  console.log(`Number of albums in collection: ${show.length}`);
  for (let i = 0; i < show.length; i++) {
    console.log(`${show[i].title} by ${show[i].artist}, published in ${show[i].yearPublished}`);
  }
}

showCollection(collection);