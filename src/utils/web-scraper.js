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

    const option = {
        url: url,
        proxy: process.env.QUOTAGUARDSTATIC_URL,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'
        }
    }
    request(option, (error,response,html) => {
    
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