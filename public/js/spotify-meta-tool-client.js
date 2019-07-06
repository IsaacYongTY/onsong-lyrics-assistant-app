document.querySelector('#spotify-uri').addEventListener('submit', (e) => {
    e.preventDefault()

    const spotifyUri = e.target.elements.spotifyUri.value
    
            fetch('./track?spotifyUri=' + spotifyUri).then((response) => {
                response.json().then((data) => {
                    console.log(data)
                    
                    // document.querySelector('#output').innerHTML = `${data.romTitle[0]} ${data.romTitle[1]} ${data.title}<br \>`
                    document.querySelector('#output').innerHTML = `${data.title}<br \>`
                    document.querySelector('#output').innerHTML += `${data.artist}<br \>`
                    document.querySelector('#output').innerHTML += `Key: ${data.key}<br \>`
                    document.querySelector('#output').innerHTML += `Tempo: ${data.tempo}<br \>`
                    document.querySelector('#output').innerHTML += `Duration: ${data.duration}<br \>`
                    document.querySelector('#output').innerHTML += `Time: ${data.time}<br \>`
                }) 
            }) `   `

})



console.log('Client side Javascript is up!')
