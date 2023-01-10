import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { asyncIncrement, decrement, increment, themeDis } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asunBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer, 
    applyMiddleware(thunk, logger)
)

add.addEventListener('click', ()=>{
    store.dispatch(increment())
})

sub.addEventListener('click', ()=>{
    store.dispatch(decrement())
})

asunBtn.addEventListener('click', ()=>{
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', ()=>{
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(themeDis(newTheme))
})

store.subscribe(()=>{
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
})

store.dispatch({type: 'INIT_APP'})