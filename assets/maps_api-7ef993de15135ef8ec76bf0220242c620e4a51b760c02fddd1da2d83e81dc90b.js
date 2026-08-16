var map;

var STYLE = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#28688b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "color": "#90abb3"
            },
            {
                "weight": "0.99"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#0c7a9c"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#29698c"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#388bbb"
            }
        ]
    }
]

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 58.570781, lng:0.0},
		zoom: 4,
		styles: STYLE,
        mapTypeControlOptions: {
            mapTypeIds: []
        } 
	});


    var image = $( "body" ).attr( "map-icon" );
    var qMarkerMoscow = new google.maps.Marker({
        position: {lat: 55.742750, lng: 37.527417},
        map: map,
        icon: image
    });

    var qMarkerIreland = new google.maps.Marker({
        position: {lat: 53.337936, lng: -6.248276},
        map: map,
        icon: image
    });
}

function newFocus(newLat,newLng)
{
    map.setCenter({
        lat : newLat,
        lng : newLng
    });

    map.setZoom(17);
}

$(document).ready(function ()
{
    $("#qMoscow").on('click', function ()
    {
      newFocus(55.742750, 37.527417);
    });

    $("#qIreland").on('click', function ()
    {
      newFocus(53.337936, -6.248276);
    });

});




