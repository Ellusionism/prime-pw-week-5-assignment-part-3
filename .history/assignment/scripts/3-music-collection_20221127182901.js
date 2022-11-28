console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  let albumtitle = {
    title,
    artist,
    yearPublished,
  }
  collection.push(title);
  return title
}