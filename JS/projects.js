const games = document.getElementById("games")
const websites = document.getElementById("websites")

function toggleToWebsites() {
    games.className = "type"
    websites.className = "type selected-type"
}

function toggleToGames() {
    games.className = "type selected-type"
    websites.className = "type"
}
