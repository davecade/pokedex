import React, { Fragment } from 'react';
import './cardview.styles.scss'
import { evolutionData } from '../../EVOLUTION_DATA';
import Card from '../card/card.component'

const findEvolutionTree = (pokemonId) => {
    for (let tree of evolutionData) {
        if(tree.includes(pokemonId)) return tree;
    }
}

export const CardView = ({pokemon, handleClickOnCard, pokemonList}) => {
    
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
                            <p>{pokemon.height/10} m</p>
                            <p>{pokemon.weight/10} kg</p>
                        </div>
                    </div>
                    
                    <h1>Evolution Tree</h1>
                    <div className="evolution-tree">
                        {
                            evolveTree.map(id => {
                                return <Card handleClickOnCard={handleClickOnCard} pokemon={pokemonList[id-1]} evolveInfo={true}/>
                            })
                        }
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