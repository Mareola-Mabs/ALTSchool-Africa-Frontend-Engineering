// Importing Getter Functions
import { Q_getter, Q_getterAll } from './getters.js'

// Dark Mode Toggle
/* Grab page elements into an array */
const items = [Q_getter('.top__nav-mode'), Q_getter('.top__nav-mode--cntrl'), Q_getter('body'), Q_getter('.screen'), Q_getterAll('button')]

/* Destructure page elements */
const [mode__toggle, mode__cntrl, page__body, screen, btn] = items

/* Creating a variable to help with toggling dark mode*/
let i = 0
mode__toggle.addEventListener("click", ()=>{
    i++
    if (i%2 === 1){
        /* Store theme settings to Local Storage */
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

/* On Refresh: apply stored theme */
let theme = localStorage.getItem("theme")
i = localStorage.getItem("i")

    if (theme === 'dark'){
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


