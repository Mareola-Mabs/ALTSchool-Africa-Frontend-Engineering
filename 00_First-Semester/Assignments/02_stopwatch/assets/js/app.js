// // The Stopwatch Functionality

// const hour_screen = Q_getter('.hour')
// const minute_screen = Q_getter('.minute')
// const sec_screen = Q_getter('.seconds')
// const milliSec_screen = Q_getter('.milliSeconds')

// const startBtn = Q_getter('.buttons__start')
// const pauseBtn = Q_getter('.buttons__pause')
// const resetBtn = Q_getter('.buttons__reset')

// let isStarted = false

// startBtn.addEventListener('click', ()=>{
//     isStarted = true

//     if (isStarted === true){
//         milliSec_screen_conv = Number(milliSec_screen.textContent)

//         sec_screen_conv = Number(sec_screen.textContent)
//         minute_screen_conv = Number(minute_screen.textContent)


//         setInterval(()=>{

//             milliSec_screen_conv += 1
//             milliSec_screen_conv_dup = milliSec_screen_conv + 1

//             milliSec_screen.textContent = String(milliSec_screen_conv).padStart(2, "0")

            




//         }, 10)

    
//     }

// })