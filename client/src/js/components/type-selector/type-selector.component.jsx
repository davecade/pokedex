import React, { useState, useEffect } from 'react'
import './type-selector.styles.scss'
import { connect } from 'react-redux'
import { updateTypeSelection } from '../../redux/search/search.actions'
import axios from 'axios'


const TypeSelector = ({type, updateTypeSelection}) => {

    const [ types, setTypes ] = useState([])

    useEffect(() => {
        return (async () => {
            const typesData = await axios.get('/types')
            setTypes(typesData.data)
        })()
    }, [])

    const handleChange = (e) => {
        updateTypeSelection(e.target.value)
    }

    return(
        <div className="typeSelector">
            <div className="dropdown">
                <select className="dropbtn" value={type} onChange={handleChange} >
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

const mapStateToProps = state => ({
    type: state.search.type
})

const mapDispatchToProps = dispatch => ({
    updateTypeSelection: type => dispatch(updateTypeSelection(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelector);