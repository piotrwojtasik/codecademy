mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2cGV0IiwiYSI6ImNreDY2bTVvcjFkdXcybm8xNmMzZmQyZGwifQ.JbCBqW9lxKiZ3TXd02hp8g';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 5 // starting zoom
});