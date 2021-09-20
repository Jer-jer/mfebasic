import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const mount = (el) => {
    ReactDOM.render(<App />, el)
}

if(process.env.NODE_ENV === 'development'){
    const marketRoot = document.querySelector('#_marketing-dev-root')

    if(marketRoot){
        mount(marketRoot)
    }
}

export { mount }