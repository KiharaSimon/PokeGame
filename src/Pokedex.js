import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component{
    static defaultProps = {
        Pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };
    render(){
        let title;
        if (this.props.isWinner){
            title = <h1 className='Pokedex-Winner'>Winning Hand</h1>
        }
        else{
            title = <h1 className='Pokedex-Loser'>Losing Hand</h1>
        }
    
        return (
            <div className = 'Pokedex'>
            {title};
            <p>total base_experience = {this.props.exp}</p>
            <div className = 'Pokedex-cards'>
            {this.props.Pokemon.map((pk) => (
                   <Pokecard id = {pk.id} name={pk.name} type={pk.type} exp={pk.base_experience} />
               ))} 
            </div>
            
            </div>
        );
    }
}

export default Pokedex;