import React from 'react';
import './card.styles.scss';
import { connect } from 'react-redux'
import { selectPokemon } from '../../redux/pokemon/pokemon.actions'



const Card = ({ pokemon, pokemonID, evolveInfo, backgroundColor, borderColor, selectPokemon}) => {

    const handleClickOnCard = async () => {
        selectPokemon(pokemonID+1)
    }

    return (
        <div
            className={`card-content ${evolveInfo ? 'evolveInfo' : 'mainPage'}`}
            id={pokemonID} onClick={handleClickOnCard}
            style={{borderColor: `${borderColor}`, background: `${backgroundColor}`}}>

            {evolveInfo ? '' : <h2>{pokemon.name}</h2>}
            <img src={`./images/pokemon_${pokemonID+1}.jpg`} alt=""/>
        </div>
    )
}

const mapStateToProps = state => ({
    stillLoading: state.pokemon.loading
})

const mapDispatchToProps = dispatch => ({
    selectPokemon: id => dispatch(selectPokemon(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);