import React from 'react'
import './loader.styles.scss'

const Loader = () => {
    return (
        <div className="loader__container">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
