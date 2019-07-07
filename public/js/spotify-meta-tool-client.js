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
                document.querySelector('#output').innerHTML = `${romTitle}${data.title}<br \>`
            }   else {
                document.querySelector('#output').innerHTML = `${data.title}<br \>`
            }
            
            document.querySelector('#output').innerHTML += `${data.artist}<br \>`
            document.querySelector('#output').innerHTML += `Key: ${data.key}<br \>`
            document.querySelector('#output').innerHTML += `Tempo: ${data.tempo}<br \>`
            document.querySelector('#output').innerHTML += `Duration: ${data.duration}<br \>`
            document.querySelector('#output').innerHTML += `Time: ${data.time}<br \>`
        }) 
    }) `   `

})

document.querySelector('#spotify-uri-input').addEventListener('click', (e) => {
    document.execCommand('SelectAll')
})

console.log('Client side Javascript is up!')
