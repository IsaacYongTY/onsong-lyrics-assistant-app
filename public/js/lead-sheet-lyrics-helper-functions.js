const removeWatermark = (lyrics) => {
    return lyrics = lyrics.replace('更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网','')
}

const removeRepeat = (lyrics) => {

    let i = 0
    for(i=0; i < lyrics.length; i++) {

            let regex = /[\#\△\*\ \＃]/gi;
            lyrics = lyrics.replace(regex, '')
    }

    return lyrics
}


const addSpace = (lyrics) => {
    let i=0
    let newString = ''

    const regex1 = /\w/g

    const lyricsArray = lyrics.split('\n')

    lyricsArray.forEach((line) => {
        
        for(i=0; i < line.length; i++) {
            newString += line[i]
            if(line[i].search(regex1) < 0 && line[i] !== '(' && line[i+1] !== ')') {
                newString += ' '
            }   
        }
 
        newString += '\n'
    })

    const regex2 = / {2,}/g
    newString = newString.replace(regex2, ' ')

    return newString
}
