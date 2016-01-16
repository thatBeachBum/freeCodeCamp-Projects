//JSON object with a record collection.
//Function update(id, prop, value) allows user to update JSON object declared collection, then returns full collection.

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Updates collection
function update(id, prop, value) {
  if (value !== "") {
    if (prop !== "tracks") {
      collection[id][prop] = value;
    } else {
      collection[id].tracks.push(value);
    }
  } else {
    delete collection[id][prop];
  }

  return collection;
}
