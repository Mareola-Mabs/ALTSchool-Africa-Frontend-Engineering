function Q_getter (param){
    const getter = document.querySelector(param)
    return getter
}


// Dark Mode Toggle
const mode__toggle = Q_getter('.top__nav-mode')
const mode__cntrl = Q_getter('.top__nav-mode--cntrl')
const page__body = Q_getter('body')


mode__toggle.addEventListener("click", ()=>{
    mode__cntrl.classList.toggle('dark')
    page__body.classList.toggle('dark')
    
})


