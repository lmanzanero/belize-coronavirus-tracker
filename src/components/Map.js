import React, { useEffect } from 'react' 
import { useQuery } from 'react-query'
import { getApiData } from '../repository/api'
import L from 'leaflet'
import virus from '../icons/virus.png';

export default function BelizeMap ()  {
    const { data, isLoading, error } = useQuery('mapdata', getApiData);
     useEffect(() => {
      var mymap = L.map('mapid').setView([17.1899, -88.4976], 8);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap);
      let virusIcon = L.icon({
        iconUrl: virus, 
        iconSize:     [20, 20], // size of the icon 
        iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location 
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    

      L.marker([17.1899, -88.4976], {icon: virusIcon}).addTo(mymap)
        .bindPopup("<b>Coronavirus Case: 🦠</b>").openPopup();


      var popup = L.popup();

      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(mymap);
      }

      mymap.on('click', onMapClick);
     }, [])
   
    return (
       <div id="mapid"></div>
    );
}