const generateUserRomString = (romTitle, syllableRequired) => {

    romTitleArray = romTitle.split(' ')

    let userRomString = ''

    if (romTitleArray.length < syllableRequired) {
        syllableRequired = romTitleArray.length
    }

    for(index = 0; index < syllableRequired ; index++) {
        userRomString += romTitleArray[index] + '\xa0'
    }
    
    return userRomString
}

const searchDOM = (title, language) => {

    document.querySelector('#search-link').innerHTML = ''

    let searchTerm = ''

    if (language === 'chinese') {
        searchTerm = title + ' 歌词'
    }   else {
        searchTerm = title + ' lyrics'
    }
   
    const googleUrl = 'https://www.google.com/search?q=' + searchTerm

    searchEl = document.createElement('a')
    searchEl.setAttribute('href', googleUrl)
    searchEl.setAttribute('target', '_blank')
    searchEl.textContent = `Search "${searchTerm}" on Google`

    document.querySelector('#search-link').appendChild(searchEl)
}

document.querySelector('#spotify-uri').addEventListener('submit', (e) => {
    e.preventDefault()

    document.querySelector('#lyrics-output').value = ''


    const spotifyUri = e.target.elements.spotifyUri.value

    const standardSpotifyUriLength = 36     // spotify:track:678Tg6Flw5FIO8wIMBaVX6 const standardSpotifyWebLength = 53        //https://open.spotify.com/track/7B8gZQY2KaAP1Dn1fhDU67 c
    const standardTrackIdLength = 22     // 678Tg6Flw5FIO8wIMBaVX6
    const spotifyLinkStart = spotifyUri 

    const getTrackId = (spotifyUri) => {
        spotifyUri = spotifyUri.replace('spotify:track:', '')
        spotifyUri = spotifyUri.replace('https://open.spotify.com/track/', '')
        spotifyUri = spotifyUri.substring(0,22)
        return spotifyUri
    }

    const spotifyId = getTrackId(spotifyUri)

    console.log(spotifyId)

    // Error handler
    if(spotifyId.length !== standardTrackIdLength) {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = 'Invalid input, please try again'
        document.querySelector('#error-message').appendChild(errorMessage)
        console.log('error')
    }   else {
        document.querySelector('#error-message').innerHTML = ''
    }

    fetch('../tracks?input=' + spotifyId).then((response) => {
        response.json().then((data) => {
            
            searchDOM(data.title, data.language)
            const pinyinIsChecked = document.querySelector('#pinyin-is-checked').checked

            let syllableRequired = ''
            
            if(document.querySelector('#syllable-required').value === 'All') {
                    syllableRequired = data.romTitle.split(' ').length
            }   else {
                    syllableRequired = document.querySelector('#syllable-required').value
            }
            
            if (pinyinIsChecked && data.language === 'mandarin') {
                const romTitle = generateUserRomString(data.romTitle, syllableRequired)
                document.querySelector('#lyrics-output').value = `${romTitle}${data.title}\n`
            }   else {
                document.querySelector('#lyrics-output').value = `${data.title}\n`
            }

            document.querySelector('#lyrics-output').value += `${data.artist}\n`
            document.querySelector('#lyrics-output').value += `Key: ${data.key}\n`
            document.querySelector('#lyrics-output').value += `Tempo: ${data.tempo}\n`
            document.querySelector('#lyrics-output').value += `Duration: ${data.duration}\n`
            document.querySelector('#lyrics-output').value += `Time: ${data.time}\n`
            document.querySelector('#lyrics-output').value += `Keywords: ${data.firstAlphabet}, ${data.language}\n\n`
            document.querySelector('#lyrics-output').value += `Year Released: ${data.yearReleased}\n\n`
            document.querySelector('#lyrics-output').value += `O: ${data.key}\n\n`

            const contributeIsChecked = document.querySelector('#contribute-is-checked').checked

            if (contributeIsChecked) {
                fetch('../tracks', {method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                    body: JSON.stringify(data)
                })
            }
        }) 
    }) 
})

document.querySelector('#copy').addEventListener('click', (e) => {
    document.querySelector('#lyrics-output').focus()
    document.execCommand('SelectAll')
    document.execCommand('Copy')
    document.querySelector('#lyrics-output').blur()
})

document.querySelector('#spotify-uri-input').addEventListener('click', (e) => {
    document.execCommand('SelectAll')
})

console.log('Client side Javascript is up!')
