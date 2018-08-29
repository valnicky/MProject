 initMap = () => {
      //we create a map here. This is from https://developers.google.com/maps/documentation/javascript/adding-a-google-map#map
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 40.416947, lng: -3.703529}
      });

    //here we create an infoWindow. This is from developers.google.com/infowindow
          var infowindow = new window.google.maps.InfoWindow()


    /*looping over venues inside the state, display dynamic markers*/
    this.state.venues.map(myVenue => {
          
           var contentString = `${myVenue.venue.name}`


      //here we create a marker. This is from https://developers.google.com/maps/documentation/javascript/markers
        var  marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        draggable: true,
        animation: window.google.maps.Animation.DROP,
        title: myVenue.venue.name
      });

     //when we click on our marker this function 'open' will be executed. This is from https://developers.google.com/maps/documentation/javascript/infowindows
         marker.addListener('click', function() {

          //we set the new content
          infowindow.setContent(contentString)

          //open infowindow
          infowindow.open(map, marker);

         var neighborhoods = [];
      function drop() {
      clearMarkers();
        for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200);
        }

}
        function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          marker.push(new window.google.maps.Marker({
            position: position,
            map: map,
            animation: window.google.maps.Animation.DROP
          }));
        }, timeout);
      }

      function clearMarkers() {
        for (var i = 0; i < marker.length; i++) {
          marker[i].setMap(null);
        }
        marker = [];
      }

      });

    })
    
  }
  


  function toggleHam() {
       var x = document.getElementByClassName('.App-header');

        if(x.style.display === 'none') {
              x.style.display = "block";
      } else {
              x.style.display('none'); 
      }
   
    }

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}