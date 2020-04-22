function initMap() {
  var map = new google.maps.Map(document.getElementById('map');

  var mainLoc = {new google.maps.LatLng (}27.1767, 78.0081);

  var pearlm = {lat: 27.1804, lgn: 78.0216};

  var tajm = {lat: 27.1751, lgn: 78.0421};

  var tomb = {lat: 27.2206, lgn: 77.9505};

  var mapOptions = {
    center: mainLoc,
    zoom: 12
  };

  var marker1 = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: pearlm,
    title: "Pearl Mosque"
  });
  marker1.addListener('click', toggleBounce);

  var marker2 = new google.maps.Marker({
    map: map
    animation: google.maps.Animation.DROP,
    position: tajm,
    title: "Taj Mahal"
  });
  marker2.addListener('click', toggleBounce);

  var marker3 = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: tomb,
    title:"Tomb of Akbar the Great"
  });
  marker3.addListener('click', toggleBounce);

}

google.maps.event.addDomListener(window, 'load', init);
