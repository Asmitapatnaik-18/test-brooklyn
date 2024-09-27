// map.js
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNtaXRhLXBhdG5haWsiLCJhIjoiY20xajZhMjVvMHpnYzJrcHM0MnFsbWQ4MyJ9.doXqYaW2Y6in0L5kFeHRzQ'; // Replace with your access token

const map = new mapboxgl.Map({
    container: 'map', // ID of the element in your HTML
    style: 'mapbox://styles/asmita-patnaik/cm1j6oyu1000301pearig5v7n', // Map style
    center: [-74.006, 40.7128], // Starting position [lng, lat]
    zoom: 12 // Starting zoom
});

// Optional: add navigation control
map.addControl(new mapboxgl.NavigationControl());