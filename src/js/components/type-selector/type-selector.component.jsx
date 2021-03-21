import React from 'react'
import './type-selector.styles.scss'

export const TypeSelector = () => {
    return(
        <div class="typeSelector">
            <input type="radio" id="Fire" name="type" value="Fire" />
            <label for="male">Fire</label>
            <input type="radio" id="Grass" name="type" value="Grass" />
            <label for="female">Grass</label>
            <input type="radio" id="Water" name="type" value="Water" />
            <label for="other">Water</label>
        </div>
    )
}