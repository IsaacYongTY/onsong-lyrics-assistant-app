
const getTrackId = (spotifyId) => spotifyId = spotifyId.replace('spotify:track:', '')

getTrackId('spotify:album:5gB8xdkbwEGyRlAZFOIzTL')
module.exports = getTrackId