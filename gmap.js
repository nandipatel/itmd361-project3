var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.229476, lng: 72.674003},
    zoom: 8
  });
}

google.maps.event.addDomListener(window, 'load', init);
