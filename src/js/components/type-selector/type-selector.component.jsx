import React from 'react'
import './type-selector.styles.scss'

export const TypeSelector = () => {
    return(
        <div class="typeSelector">
            <input type="radio" class="radio" id="Fire" name="type" value="Fire" />
            <label for="male" class="label">Fire</label>
            <input type="radio" class="radio" id="Grass" name="type" value="Grass" />
            <label for="female" class="label">Grass</label>
            <input type="radio" class="radio" id="Water" name="type" value="Water" />
            <label for="other" class="label">Water</label>
        </div>
    )
}