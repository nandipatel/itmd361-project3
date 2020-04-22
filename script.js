function initMap() {
  var mainLoc = new google.maps.LatLng (27.1767, 78.0081);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: mainLoc,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: mainLoc,
    map: map,
    title: 'Agra'
  });
}

google.maps.event.addDomListener(window, 'load', init);
