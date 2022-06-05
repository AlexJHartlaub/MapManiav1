var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById("myMapID"), {
        center: {lat: 41.878, lng: 10}, zoom: 3});
 
    var marker = new google.maps.Marker({position:{lat:35.0116,lng:135.7681}, map:gMap});
    marker.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  

    var infoWindow = new google.maps.InfoWindow({content:'Kyoto, Japan'});
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });
}


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom();
    var inBounds = false;

    if (gMap.getBounds().contains({lat:35.0116,lng:135.7681})) {
        inBounds = true;
    }

    console.log("inBounds: " + inBounds + " zoomLevel: " + zoomLevel);
}



function initApplication() {
    console.log('MapManiav1 - Starting!')
}