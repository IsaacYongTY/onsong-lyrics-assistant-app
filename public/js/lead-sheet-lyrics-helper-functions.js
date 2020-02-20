const removeWatermark = (lyrics) => {
    return lyrics = lyrics.replace('更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网','')
}

const removeRepeat = (lyrics) => {

    let i = 0
    for(i=0; i < lyrics.length; i++) {

        if(lyrics[i] = '#') {

            let regex = /\#/gi;

            lyrics = lyrics.replace(regex, '')
        }

        if(lyrics[i] = '△') {

            let regex = /\△/gi;

            lyrics = lyrics.replace(regex, '')
        }

        if(lyrics[i] = '＊') {

            let regex = /\＊/gi;

            lyrics = lyrics.replace(regex, '')
        }
        
        if(lyrics[i] = '　') {

            let regex = /\　/gi;

            lyrics = lyrics.replace(regex, '')
        }

        if(lyrics[i] = '＃') {

            let regex = /\＃/gi;

            lyrics = lyrics.replace(regex, '')
        }
        
    }

    return lyrics
}


const addSpace = (lyrics) => {
    let i=0
    let newString = ''

    for(i=0; i < lyrics.length; i++) {

        if(lyrics[i]  !== ' ' && lyrics[i] !== '\n') {
           newString = newString + lyrics[i] + ' '
        }
    
        if(lyrics[i] === '\n') {
            newString = newString + '\n'
        }
    }

    return newString
}
