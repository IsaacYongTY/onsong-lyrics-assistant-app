document.querySelector('#input-form').addEventListener('submit', (e) => {
    e.preventDefault()

    let lyrics = e.target.elements.lyrics.value

    lyrics = addSpace(
        removeRepeat(removeWatermark(lyrics)
        )
    )
 
  
    document.querySelector('#text-output').innerHTML = lyrics


})

document.querySelector('#clear-all').addEventListener('click', (e) => {

    document.querySelector('#text-output').innerHTML = ''
   
    document.querySelector('#text-input').value = ''

  
})

