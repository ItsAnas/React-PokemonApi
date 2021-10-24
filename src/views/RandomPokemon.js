import { useState, } from "react";
import SpinningButton from "../components/SpinningButton";

function GetTypeSpan(poketype) {
    const colors = {
        'normal': 'bg-gray-200',
        'fire': 'bg-red-200',
        'water': 'bg-blue-400',
        'grass': 'bg-green-200',
        'flying': 'bg-gray-200',
        'fighting': 'bg-yellow-800',
        'poison': 'bg-purple-200',
        'electric': 'bg-yellow-200',
        'ground': 'bg-gray-200',
        'rock': 'bg-yellow-800',
        'psychic': 'bg-purple-100',
        'ice': 'bg-blue-100',
        'bug': 'bg-green-200',
        'ghost': 'bg-pink-200',
        'steel': 'bg-gray-200',
        'dragon': 'bg-blue-800',
        'dark': 'bg-grey-500',
        'fairy': 'bg-pink-300'
    }

    if (!(poketype in colors))
        console.error(poketype + ' not found in colors');

    const classToAdd = "px-4 py-2  text-base rounded-full text-gray-600  " + colors[poketype];

    return <span key={poketype} className={classToAdd}>{poketype}</span>
}


function RandomPokemonPage() {

    const [pokemon, setPokemon] = useState({
        name: 'Pikachu',
        picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        types: ['electric']
    });

    return (
        <div>
            <div className="flex justify-center mb-5">
                <SpinningButton setPokemonName={setPokemon} isActive={false} text={"Get a random pokemon"} />
            </div>

            <div className="shadow-lg rounded-2xl  bg-white w-64 m-auto p-2">
                <img src={pokemon.picture} alt="pokemon" className="w-32 p-4 h-36 m-auto" />
                <div className="bg-pink-200 m-3 p-4 rounded-lg">
                    <p className="text-white text-xl font-bold ">
                        {pokemon.name}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    {pokemon.types.map((type) => GetTypeSpan(type))}
                </div>
            </div>

        </div>
    );
}

export default RandomPokemonPage;
