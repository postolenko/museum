if( $("#map").length > 0 ) {

    ymaps.ready(init);
    var myMap,
        myPlacemark;

}

function init(){   
    myMap = new ymaps.Map("map", {
        center: [46.959064, 142.744463],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([46.959064, 142.744463], {
        hintContent: 'Краеведческий музей',
        balloonContent: 'Краеведческий музей'
    });

    myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('zoomControl');
    myMap.behaviors.disable(['scrollZoom']);

}