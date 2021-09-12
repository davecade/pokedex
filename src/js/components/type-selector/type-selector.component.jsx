import React from 'react'
import './type-selector.styles.scss'
import { connect } from 'react-redux'
import { updateTypeSelection } from '../../redux/search/search.actions'
import {types} from '../../data/pokemon.data'

const TypeSelector = ({updateTypeSelection}) => {

    const handleChange = (e) => {
        updateTypeSelection(e.target.value)
    }

    return(
        <div className="typeSelector">
            <div className="dropdown">
                <select className="dropbtn" onChange={handleChange} >
                    {
                        types.map((type, index) => {
                            return <option key={index} value={type}>{type.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTypeSelection: type => dispatch(updateTypeSelection(type))
})

export default connect(null, mapDispatchToProps)(TypeSelector);