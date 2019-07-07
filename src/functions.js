const removeWatermark = function (song) {
    song.lyrics = song.lyrics.replace('更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网 ', '')
}

const getFirstAlphabet = function (song) {
    
    if(song.romTitle.length === 0) {
        splittedTitle = song.title.split(' ') // using split returns an array
    }   else {
        splittedTitle = song.romTitle.split(' ') // using split returns an array
    }
    

    let resultString = ''

    for(index=0; index < splittedTitle.length; index++) {
        eachString = splittedTitle[index].toLowerCase()
        resultString += eachString[0] //get first alphabet and add to string
    }
    
    song.firstAlphabet = resultString

    
}


  createOnSongFile = function (song) {
    sanitizeGeniusLyrics(song)
    removeWatermark(song)
    getFirstAlphabet(song)
    fs.writeFileSync(`./output-folder/${song.title}.onsong`,`${metaTemplate(song)}O: ${song.key}\n\n${song.lyrics}`)
}

sanitizeGeniusLyrics = (song) => {
    regex1 = /\[/g     // remove [ ]
    regex2 = /\]/g
    song.lyrics = song.lyrics.replace(regex1, '')
    song.lyrics = song.lyrics.replace(regex2, ':')
}



  
 