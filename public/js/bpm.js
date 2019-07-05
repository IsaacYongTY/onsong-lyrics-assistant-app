let count = 0
let startTime = 0
let totalTimeLapsed = 0
let duration = 5000 // Listen for 5 seconds

calculateBPM = function () {
    if (count !== 0) {
        timeLapsed = Date.now() - startTime

        totalTimeLapsed = totalTimeLapsed + timeLapsed

        averageTimeLapsed = totalTimeLapsed / count

        if (startTime + 2000 >= Date.now() ) {
            if (count > 1) {
                document.querySelector('#bpm-value').value = (1/(averageTimeLapsed/60000)).toFixed(1)
            } 
        }   else {
            count = 0
            averageTimeLapsed = 0
            totalTimeLapsed = 0
            document.querySelector('#bpm-value').value = ''
        }
    }

    // Date.now reset the time to current time, effectively reset the timer
    startTime = Date.now() 
    count++
    document.querySelector('#counter').value = count
    // For reference: to get lapsed time 
    // Date.now - startTime
  
}




document.querySelector('#tap').addEventListener('click', function (e) {
    //document.querySelector('#tap').focus()
    calculateBPM()
})

document.querySelector('#clear').addEventListener('click', function (e) {
    document.querySelector('#bpm-value').value = null
    document.querySelector('#counter').value = null
    document.querySelector('#clear').blur()
    count = 0
    averageTimeLapsed = 0
    totalTimeLapsed = 0
})

document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        document.querySelector('#tap').blur()
        document.querySelector('#clear').blur()
        calculateBPM()
    }
})

document.querySelector('#listen').addEventListener('click', function (e) {     
    listenSong(duration)
})

// Listen to the song for n seconds
const listenSong = function (duration) {
    let timeLapsed = 0
    let interval = 0
    let count = 0
    while (timeLapsed < duration - 1000) {
        let startTime = Date.now()
        // On microphone to listen to music
        // Run calculateBPM() every time spike is detected

       
        let endTime = Date.now()

        //timeLapsed += (endTime - startTime)

        
        
         // Dummy program to mimic 
         let volDiff = 30
         if (volDiff > 20 && interval % 500 === 0) {
             console.log(timeLapsed)
             count = count + 1
 
         }
         // Test time lapse
        
        timeLapsed += 200
        interval += 500
        
    }
    document.querySelector('#bpm-value').value = (count/(interval/60000)).toFixed(1)
    console.log(timeLapsed)
}

//

    








