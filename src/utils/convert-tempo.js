const convertTempo = (spotifyTempo, spotifyTime) => {

  if (spotifyTime === 3) {
    spotifyTempo = spotifyTempo * 2 / spotifyTime
  }
  
  return `${Math.round(spotifyTempo)}`
}

module.exports = convertTempo