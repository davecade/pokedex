import React, { useState, useEffect } from 'react';
import './cardview.styles.scss'
import Card from '../card/card.component'
import { connect } from 'react-redux';
import { disableModal } from '../../redux/modal/modal.actions'
import axios from 'axios';


const CardView = ({selected, disableModal}) => {
    const pokemon = selected
    const [ evolveTree, setEvolveTree ] = useState([])

    useEffect(() => {
        return (async () => {
            const evolveTreeData = await axios.get(`/evolveTree/${pokemon.id}`)
            let foundTree = evolveTreeData.data
            setEvolveTree(foundTree)
        })()
    }, [selected, pokemon.id])

    return (
        <div className="cardview">
            <div className="name-container">
                <h1 className="cardview-name">{pokemon.name}</h1>
            </div>

            <div className="cardview-content">
                <div className="close-modal">
                    <i className="fas fa-chevron-circle-left" onClick={disableModal}></i>
                </div>

                <div className="left">
                    <div className="cardview-stats">
                        <div className="stat-title">
                            <p>TYPE</p>
                            <p>HP</p>
                            <p>ATTACK / DEFENSE</p>
                            <p>SPEED</p>
                            <p>HEIGHT</p>
                            <p>WEIGHT</p>
                        </div>
                        <div className="stat-value">
                            <p>{pokemon.type[0] ? pokemon.type[0].toUpperCase() : ''} {pokemon.type[1] ? `and ${pokemon.type[1].toUpperCase()}` : ''}</p>
                            <p>{pokemon.hp}</p>
                            <p>{pokemon.attack} / {pokemon.defense}</p>
                            <p>{pokemon.speed}</p>
                            <p>{pokemon.height/10} meters</p>
                            <p>{pokemon.weight/10} kg</p>
                        </div>
                    </div>
                    
                    <div className="cardview-description">
                        <h4>DESCRIPTION</h4>
                        <p>{pokemon.description}</p>
                    </div>

                    <div className="evolution-container">
                        <h4 className="evolution-tree-title">EVOLUTION STAGES</h4>
                    
                        <div className="evolution-tree">
                            {
                                (evolveTree ? evolveTree : []).map(id => {
                                    let borderColor;
                                    let backgroundColor

                                    if(pokemon.id === (id)) {
                                        borderColor = "gold"
                                        backgroundColor = "black"
                                    } else {
                                        borderColor = "black"
                                        backgroundColor = "black"
                                    }

                                    return <Card key={id} pokemon={pokemon} pokemonID={id-1} backgroundColor={backgroundColor} borderColor={borderColor} evolveInfo={true}/>
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="cardview-pokemon">
                    <img src={pokemon.image} alt="" className="cardview-img"/>
                </div>

            </div>
            <div className="red"></div>
        </div>
    )
}

const mapStateToProps = state => ({
    selected: state.pokemon.selected,
})

const mapDispatchToProps = dispatch => ({
    disableModal: () => dispatch(disableModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardView)