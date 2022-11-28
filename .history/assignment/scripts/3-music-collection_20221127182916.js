console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let albumTitle = {
    title,
    artist,
    yearPublished,
  }
  collection.push(albumTitle);
  return title
}