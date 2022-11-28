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
addToCollection(`Blonde on BLonde`, `Buena Vista Social Club`, 1997);
addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);
addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);
addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);
addToCollection(`Buena Vista Social Club`, `Buena Vista Social Club`, 1997);

