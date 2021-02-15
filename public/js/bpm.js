let count = 0
let startTime = 0
let totalTimeLapsed = 0
let duration = 5000 // Listen for 5 seconds
let resetWaitTime = 2000
let averageTimeLapsed

calculateBPM = function () {
    if (count !== 0) {
        let timeLapsed = Date.now() - startTime

        totalTimeLapsed += timeLapsed
        averageTimeLapsed = totalTimeLapsed / count

        if (Date.now() - startTime <= resetWaitTime ) {
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


    








