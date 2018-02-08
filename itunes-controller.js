function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results) {
            var template = ''
    //var musicSearch = document.onclick(submit).htmltext = document.getElementsByTagName('Artist Name')

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
    
      
      var title = result.title
      var albumArt = result.albumArt
      var artist = result.artist
      var collection = result.collection
      var price = result.price
      var preview = result.preview

      template += `
      <div class="col-sm-4">
      <div class="card text-center" style="width: 18rem;">
          <img class="card-img-top" src="${albumArt}" alt="Picture of ${artist}">
          <div class="card-body">
              <h5 class="card-title">${artist}</h5>
              <p class="card-subtitle mb-2 text-muted">${title}</p>
              <p class="card-text">
                  <span class="threeLines">Album: ${collection}</span>
              </p>
              <p class="card-text">Price $ ${price}</p>
              <audio controls>
                  <source src="${preview}" type="audio/mpeg "> Your browser does not support HTML5 video.
              </audio>
              <div>
              </div>
          </div>
      </div>
  </div>
                       
       `
    }
  
    document.getElementById('musicResults').innerHTML = template
  }
}
 


  