let playerPaths = {}; // Store paths for each player

async function fetchPlayerPositions() {
    try {
        const response = await fetch('https://api.earthmc.net/v3/aurora/players/'); // Replace with the correct endpoint
        const players = await response.json();

        players.forEach(player => {
            const { name, x, z } = player.position;
            if (!playerPaths[name]) {
                playerPaths[name] = [[x, z]]; // Initialize the path if it doesn't exist
            } else {
                playerPaths[name].push([x, z]); // Add new position to the path
            }

            // Draw or update the line on the map
            if (playerPaths[name].length > 1) {
                L.polyline(playerPaths[name], { color: 'blue' }).addTo(map);
            }
        });

    } catch (error) {
        console.error('Error fetching player data:', error);
    }
}

// Update paths every 5 seconds
setInterval(fetchPlayerPositions, 5000);
