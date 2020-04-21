var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map');

  var mainLoc = new google.maps.LatLng (27.1767, 78.0081);

  var pearlm = new google.maps.LatLng (27.1804, 78.0216);

  var tajm = new google.maps.LatLng (27.1751, 78.0421);

  var tomb = new google.maps.LatLng (27.2206, 77.9505);

  var mapOptions = {
    center: mainLoc,
    zoom: 12
  };

  var marker1 = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: pearlm
  });
  marker1.addListener('click', toggleBounce);

  var marker2 = new google.maps.Marker({
    map: map
    animation: google.maps.Animation.DROP,
    position: tajm
  });
  marker2.addListener('click', toggleBounce);

  var marker3 = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: tomb
  });
  marker3.addListener('click', toggleBounce);

}

google.maps.event.addDomListener(window, 'load', init);
