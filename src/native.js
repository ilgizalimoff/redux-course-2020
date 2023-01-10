import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asunBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let state = 0

function render(){
    counter.textContent = state
}

add.addEventListener('click', ()=>{
    state++
    render()
})

sub.addEventListener('click', ()=>{
    state--
    render()
})

asunBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        state++
        render()
    }, 2000)
    render()
})

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})

render()