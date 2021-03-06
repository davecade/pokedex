import React from 'react';
import './card.styles.scss';
import { connect } from 'react-redux'
import { selectPokemon } from '../../redux/pokemon/pokemon.actions'
import { enableModal } from '../../redux/modal/modal.actions'


const Card = ({stillLoading, pokemon, evolveInfo, backgroundColor, borderColor, enableModal, selectPokemon, pokemonList}) => {


    const handleClickOnCard = (e) => {
        let clickedCard = e.target.closest('.card-content')
        let clickedCardId = clickedCard.getAttribute("id")
        selectPokemon(pokemonList[clickedCardId-1])
        enableModal()
    }

    return (
        <div
            className={`card-content ${evolveInfo ? 'evolveInfo' : 'mainPage'}`}
            id={pokemon.id} onClick={stillLoading ? '' : handleClickOnCard}
            style={{border: `5px solid ${borderColor}`, background: `${backgroundColor}`}}>

            {evolveInfo ? '' : <h2>{pokemon.name}</h2>}
            <img src={pokemon.image} alt=""/>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemonList,
    stillLoading: state.pokemon.loading
})

const mapDispatchToProps = dispatch => ({
    selectPokemon: pokemon => dispatch(selectPokemon(pokemon)),
    enableModal: () => dispatch(enableModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);