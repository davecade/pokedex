import React from 'react';
import './cardview.styles.scss'
import { evolutionData } from '../../data/EVOLUTION_DATA';
import Card from '../card/card.component'
import { connect } from 'react-redux';

const findEvolutionTree = (pokemonId) => {
    for (let tree of evolutionData) {
        if(tree.includes(pokemonId)) return tree;
    }
}

const CardView = ({selected, pokemonList}) => {

    let pokemon = selected
    let evolveTree = (findEvolutionTree(pokemon.id) ? findEvolutionTree(pokemon.id): [])

    return (
        <div className="cardview">
            <div className="name-container">
                <h1 className="cardview-name">{pokemon.name}</h1>
            </div> 
            
            <div className="cardview-content">
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
                                evolveTree.map(id => {
                                    let borderColor;
                                    let backgroundColor

                                    if(pokemon.id === (id)) {
                                        borderColor = "gold"
                                        backgroundColor = "black"
                                    } else {
                                        borderColor = "black"
                                        backgroundColor = "black"
                                    }

                                    return <Card pokemon={pokemonList[id-1]} backgroundColor={backgroundColor} borderColor={borderColor} evolveInfo={true}/>
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
    pokemonList: state.pokemon.pokemonList,
    selected: state.pokemon.selected
})

export default connect(mapStateToProps)(CardView)