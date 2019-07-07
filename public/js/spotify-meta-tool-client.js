const generateUserRomString = (romTitleArray, syllableRequired) => {

    let userRomString = ''

    for(index = 0; index < syllableRequired ; index++) {
        userRomString += romTitleArray[index] + '\xa0'

    }

    return userRomString
}

document.querySelector('#spotify-uri').addEventListener('submit', (e) => {
    e.preventDefault()

    document.querySelector('#lyrics-output').value = ''


    const spotifyUri = e.target.elements.spotifyUri.value
    console.log(spotifyUri.length)

    // Error handler
    if(spotifyUri.length !== 36) {

        const errorMessage = document.createElement('p')
        errorMessage.textContent = 'Invalid input, please try again'
        document.querySelector('#error-message').appendChild(errorMessage)
        console.log('error')
    }   else {
        document.querySelector('#error-message').innerHTML = ''
    }

    fetch('./track?spotifyUri=' + spotifyUri).then((response) => {
        response.json().then((data) => {
            console.log(spotifyUri)
            console.log(data)
            
            const pinyinIsChecked = document.querySelector('#pinyin-is-checked').checked

            let syllableRequired = ''
            
            if(document.querySelector('#syllable-required').value === 'All') {
                    syllableRequired = data.romTitleArray.length
            }   else {
                    syllableRequired = document.querySelector('#syllable-required').value
            }
            
            if (pinyinIsChecked && data.language === 'chinese') {
                const romTitle = generateUserRomString(data.romTitleArray, syllableRequired)
                console.log(romTitle)
                document.querySelector('#lyrics-output').value = `${romTitle}${data.title}\n`
            }   else {
                document.querySelector('#lyrics-output').value = `${data.title}\n`
            }

            document.querySelector('#lyrics-output').value += `${data.artist}\n`
            document.querySelector('#lyrics-output').value += `Key: ${data.key}\n`
            document.querySelector('#lyrics-output').value += `Tempo: ${data.tempo}\n`
            document.querySelector('#lyrics-output').value += `Duration: ${data.duration}\n`
            document.querySelector('#lyrics-output').value += `Time: ${data.time}\n\n`
            document.querySelector('#lyrics-output').value += `O: ${data.key}\n\n`
        }) 
    }) 

    //const lyricsUrl = e.target.elements.lyricsUrl.value

    // if (lyricsUrl.length > 0) {

        
        
    //     fetch('./lyrics?url=' + lyricsUrl).then((response) => {
    //         response.json().then((data) => {
    //             console.log(data)

                

    //             document.querySelector('#lyrics-output').value += data.lyrics
    
    //             document.querySelector('#lyrics-output').focus()
    //             document.execCommand('SelectAll')
    //             document.execCommand('Copy')
    //         })
    //     })
    // }   
  
    

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
