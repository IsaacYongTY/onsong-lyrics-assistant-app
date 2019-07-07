const cheerio = require('cheerio')
const request = require('request')

const replaceHtmlBreakLineToText = (textString) => {
    const regex = /\<br\>/gi
    return textString.replace(regex, '\n')

}

const removeWatermark = function (lyrics) {
    return lyrics.replace('<a href="http://mojim.com">&#x203B; Mojim.com&#x3000;&#x9B54;&#x955C;&#x6B4C;&#x8BCD;&#x7F51; </a>', '')
}

const webScraper = (url,callback) => {
    request({url: url, headers: {'User-Agent': 'request'}}, (error,response,html) => {
    
        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html)
    
            let lyrics = $('#fsZx3').html()
            
            let endIndex = lyrics.indexOf('[00')
    
            lyrics  = lyrics.slice(0, endIndex)

            endIndex = lyrics.indexOf('<ol>')

            lyrics  = lyrics.slice(0, endIndex)

            console.log(lyrics)

            lyrics = removeWatermark(lyrics)
            lyrics = replaceHtmlBreakLineToText(lyrics).trim()
            

            console.log(lyrics)

            const output = {lyrics: lyrics}
            callback(output)
        }
    })
}



module.exports = webScraper