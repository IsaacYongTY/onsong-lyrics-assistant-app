const generateUserRomString = (romTitleArray, syllableRequired) => {

    let userRomString = ''

    for(index = 0; index < syllableRequired ; index++) {
        userRomString += romTitleArray[index] + '\xa0'

    }

    return userRomString
}

document.querySelector('#spotify-uri').addEventListener('submit', (e) => {
    e.preventDefault()

    const spotifyUri = e.target.elements.spotifyUri.value
    
    fetch('./track?spotifyUri=' + spotifyUri).then((response) => {
        response.json().then((data) => {
            console.log(data)
            
            const pinyinIsChecked = document.querySelector('#pinyin-is-checked').checked

            let syllableRequired = ''
            
            if(document.querySelector('#syllable-required').value === 'All') {
                    syllableRequired = data.romTitleArray.length
            }   else {
                    syllableRequired = document.querySelector('#syllable-required').value
            }
            
            if (pinyinIsChecked) {
                const romTitle = generateUserRomString(data.romTitleArray, syllableRequired)
                console.log(romTitle)
                document.querySelector('#lyrics-output').innerHTML = `${romTitle}${data.title}\n`
            }   else {
                document.querySelector('#lyrics-output').innerHTML = `${data.title}\n`
            }

            document.querySelector('#lyrics-output').innerHTML += `${data.artist}\n`
            document.querySelector('#lyrics-output').innerHTML += `Key: ${data.key}\n`
            document.querySelector('#lyrics-output').innerHTML += `Tempo: ${data.tempo}\n`
            document.querySelector('#lyrics-output').innerHTML += `Duration: ${data.duration}\n`
            document.querySelector('#lyrics-output').innerHTML += `Time: ${data.time}\n\n`
            document.querySelector('#lyrics-output').innerHTML += `O: ${data.key}\n\n`
        }) 
    }) 

    const lyricsUrl = e.target.elements.lyricsUrl.value

    // if (lyricsUrl.length > 0) {

        
        
    //     fetch('./lyrics?url=' + lyricsUrl).then((response) => {
    //         response.json().then((data) => {
    //             console.log(data)

                

    //             document.querySelector('#lyrics-output').innerHTML += data.lyrics
    
    //             document.querySelector('#lyrics-output').focus()
    //             document.execCommand('SelectAll')
    //             document.execCommand('Copy')
    //         })
    //     })
    // }   
  
    

})

document.querySelector('#url-input').addEventListener('submit', (e) => {
    e.preventDefault()

    
    
})

document.querySelector('#spotify-uri-input').addEventListener('click', (e) => {
    document.execCommand('SelectAll')
})

console.log('Client side Javascript is up!')
