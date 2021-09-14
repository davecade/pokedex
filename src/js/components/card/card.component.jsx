import React from 'react';
import './card.styles.scss';
import { connect } from 'react-redux'
import { selectPokemon } from '../../redux/pokemon/pokemon.actions'
//import { enableModal } from '../../redux/modal/modal.actions'
import { names } from '../../data/pokemon.data'


const Card = ({ pokemonID, evolveInfo, backgroundColor, borderColor, enableModal, selectPokemon}) => {


    const handleClickOnCard = async () => {
        // let clickedCard = e.target.closest('.card-content')
        // let clickedCardId = clickedCard.getAttribute("id")
        selectPokemon(pokemonID+1)
    }
    //-- stillLoading ? '' : 
    return (
        <div
            className={`card-content ${evolveInfo ? 'evolveInfo' : 'mainPage'}`}
            id={pokemonID} onClick={handleClickOnCard}
            style={{borderColor: `${borderColor}`, background: `${backgroundColor}`}}>

            {evolveInfo ? '' : <h2>{names[pokemonID]}</h2>}
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