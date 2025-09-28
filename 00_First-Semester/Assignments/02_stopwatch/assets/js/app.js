// Importing Getter Functions
import { Q_getter, Q_getterAll } from './getters.js'

// The Stopwatch Functionality
/* Grab screen elements into an array */
const screenItems = [Q_getter('.hour'), Q_getter('.minute'), Q_getter('.seconds'), Q_getter('.milliSeconds')]

/* Destructure screen elements */
const [hour_screen, minute_screen, sec_screen, milliSec_screen] = screenItems

/* Grab button elements into an array */
const btnItems = [Q_getter('.buttons__start'), Q_getter('.buttons__pause'), Q_getter('.buttons__reset')]

/* Destructure button elements */
const [startBtn, pauseBtn, resetBtn] = btnItems

let isStarted = 0
let timerId


// Stopwatch Functionality
/* Defining Timer Function */
function startTimer(){
    timerId = setInterval(() => {
        let convertedMilliSec = Number(milliSec_screen.textContent)
        convertedMilliSec++
        let hiddenConvertedMilliSec = convertedMilliSec + 1
        milliSec_screen.textContent = String(convertedMilliSec).padStart(2, "0")

        

        if (hiddenConvertedMilliSec === 100){
            convertedMilliSec = 0
            milliSec_screen.textContent = String(convertedMilliSec).padStart(2, "0")

            let convertedSec = Number(sec_screen.textContent)
            convertedSec++
            let hiddenConvertedSec = convertedSec + 1
            sec_screen.textContent = String(convertedSec).padStart(2, "0")

            if (hiddenConvertedSec === 60){
                convertedSec = 0
                sec_screen.textContent = String(convertedSec).padStart(2, "0")

                let convertedMinute = Number(minute_screen.textContent)
                convertedMinute++
                let hiddenConvertedMinute = convertedMinute + 1
                minute_screen.textContent = String(convertedMinute).padStart(2, "0")

                if (hiddenConvertedMinute === 60){
                    convertedMinute = 0
                    minute_screen.textContent = String(convertedMinute).padStart(2, "0")

                    let convertedHour = Number(hour_screen.textContent)
                    convertedHour++
                    // let hiddenConvertedMinute = convertedMinute + 1
                    hour_screen.textContent = String(convertedHour).padStart(2, "0")
                }
            }


        }
        
    }, 10)
}


/* Start button */
startBtn.addEventListener('click', ()=>{
    isStarted ++ // This will help check if clock has started
    if (isStarted === 1) {
        startTimer()
    } else {
        isStarted = 1 // Prevent multiple intervals
    }
})

/* Reset button */
resetBtn.addEventListener('click', ()=>{
    isStarted = 0
    clearInterval(timerId)
    screenItems.forEach(item =>{
        item.textContent = "00"
    })
})





