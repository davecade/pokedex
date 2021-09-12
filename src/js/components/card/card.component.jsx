import React from 'react';
import './card.styles.scss';
import { connect } from 'react-redux'
import { selectPokemon } from '../../redux/pokemon/pokemon.actions'
import { enableModal } from '../../redux/modal/modal.actions'
import { names } from '../../data/pokemon.data'


const Card = ({stillLoading, dataID, pokemon, evolveInfo, backgroundColor, borderColor, enableModal, selectPokemon, pokemonList}) => {


    const handleClickOnCard = (e) => {
        let clickedCard = e.target.closest('.card-content')
        let clickedCardId = clickedCard.getAttribute("id")
        console.log("clickedCardId", clickedCardId)
        selectPokemon(dataID+1)
        enableModal()
    }
    //-- stillLoading ? '' : 
    return (
        <div
            className={`card-content ${evolveInfo ? 'evolveInfo' : 'mainPage'}`}
            id={dataID} onClick={handleClickOnCard}
            style={{borderColor: `${borderColor}`, background: `${backgroundColor}`}}>

            {evolveInfo ? '' : <h2>{names[dataID]}</h2>}
            <img src={`./images/pokemon_${dataID+1}.jpg`} alt=""/>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemonList: state.pokemon.pokemonList,
    stillLoading: state.pokemon.loading
})

const mapDispatchToProps = dispatch => ({
    selectPokemon: id => dispatch(selectPokemon(id)),
    enableModal: () => dispatch(enableModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);