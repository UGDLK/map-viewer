// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Default to global view

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example player movement data
const playerMovements = [
  { lat: 40.7128, lng: -74.0060, timestamp: '2024-11-25T12:00:00Z' }, // NYC
  { lat: 34.0522, lng: -118.2437, timestamp: '2024-11-25T18:00:00Z' }, // LA
  { lat: 51.5074, lng: -0.1278, timestamp: '2024-11-26T00:00:00Z' } // London
];

// Plot player movements
playerMovements.forEach(move => {
  L.marker([move.lat, move.lng]).addTo(map)
    .bindPopup(`Timestamp: ${move.timestamp}`).openPopup();
});
