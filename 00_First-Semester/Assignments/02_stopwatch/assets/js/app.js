// Define Getter Function
function Q_getter (param){
    const getter = document.querySelector(param)
    return getter
}
function Q_getterAll (param){
    const getter = document.querySelectorAll(param)
    return getter
}


// Dark Mode Toggle
const mode__toggle = Q_getter('.top__nav-mode')
const mode__cntrl = Q_getter('.top__nav-mode--cntrl')
const page__body = Q_getter('body')
const screen = Q_getter('.screen')

const btn = Q_getterAll('button')


let i = 0
mode__toggle.addEventListener("click", ()=>{
    i++
    if (i%2 == 1){
        localStorage.setItem("theme", "dark")
        localStorage.setItem("i", i)
    }
    else{
       localStorage.setItem("theme", "light") 
       localStorage.setItem("i", i)

    }
    mode__cntrl.classList.toggle('dark')
    page__body.classList.toggle('dark')
    screen.classList.toggle('dark')

    btn.forEach(item=>{
        item.classList.toggle('dark')
    })
    
}) 

let theme = localStorage.getItem("theme")
i = localStorage.getItem("i")

    if (theme == 'dark'){
        mode__cntrl.classList.add(theme)
        page__body.classList.add(theme)
        screen.classList.add(theme)

        btn.forEach(item=>{
            item.classList.add(theme)
        })
    }
    else{
        mode__cntrl.classList.remove(theme)
        page__body.classList.remove(theme)
        screen.classList.remove(theme)

        btn.forEach(item=>{
            item.classList.remove(theme)
        })
    }
// End of Dark Mode Toggle





// The Stopwatch Functionality
const hour_screen = Q_getter('.hour')
const minute_screen = Q_getter('.minute')
const sec_screen = Q_getter('.seconds')
const milliSec_screen = Q_getter('.milliSeconds')

const startBtn = Q_getter('.buttons__start')
const pauseBtn = Q_getter('.buttons__pause')
const resetBtn = Q_getter('.buttons__reset')

let isStarted = false

startBtn.addEventListener('click', ()=>{
    isStarted = true

    if (isStarted === true){
        milliSec_screen_conv = Number(milliSec_screen.textContent)

        sec_screen_conv = Number(sec_screen.textContent)
        minute_screen_conv = Number(minute_screen.textContent)


        setInterval(()=>{

            milliSec_screen_conv += 1
            milliSec_screen_conv_dup = milliSec_screen_conv + 1

            milliSec_screen.textContent = String(milliSec_screen_conv).padStart(2, "0")

            




        }, 10)

    
    }

})