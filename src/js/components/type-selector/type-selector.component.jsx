import React from 'react'
import './type-selector.styles.scss'
import { connect } from 'react-redux'
import { updateTypeSelection } from '../../redux/search/search.actions'
import types from '../../data/pokemon-types'

const TypeSelector = ({updateTypeSelection}) => {

    const handleChange = (e) => {
        updateTypeSelection(e.target.value)
    }

    return(
        <div className="typeSelector">
            <div className="dropdown">
                <select className="dropbtn" onChange={handleChange}>
                    {
                        types.map(type => {
                            return <option selected={type === "All Types" ? "selected" : ""} value={type}>{type.toUpperCase()}</option>
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