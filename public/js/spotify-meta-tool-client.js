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

    const standardSpotifyUriLength = 36

    // Error handler
    if(spotifyUri.length !== standardSpotifyUriLength) {

        const errorMessage = document.createElement('p')
        errorMessage.textContent = 'Invalid input, please try again'
        document.querySelector('#error-message').appendChild(errorMessage)
        console.log('error')
    }   else {
        document.querySelector('#error-message').innerHTML = ''
    }

    fetch('./track?spotifyUri=' + spotifyUri).then((response) => {
        response.json().then((data) => {
            
            console.log(data)
            
            searchDOM(data.title, data.language)
            const pinyinIsChecked = document.querySelector('#pinyin-is-checked').checked

            let syllableRequired = ''
            
            if(document.querySelector('#syllable-required').value === 'All') {
                    syllableRequired = data.romTitle.split(' ').length
            }   else {
                    syllableRequired = document.querySelector('#syllable-required').value
            }
            
            if (pinyinIsChecked && data.language === 'chinese') {
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
            document.querySelector('#lyrics-output').value += `O: ${data.key}\n\n`
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
