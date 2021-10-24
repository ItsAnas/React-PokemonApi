import { useState, } from "react";
import axios from 'axios';

const SpinningButton = ({ isActiveProps, text, setPokemonName: setPokemon }) => {
    const [isActive, setIsActive] = useState(isActiveProps);

    const handleClick = async () => {
        setIsActive(!isActive);
        const randomNum = Math.floor(Math.random() * 150); // 1118 is the max
        const data = await axios.get('https://pokeapi.co/api/v2/pokemon/' + randomNum);
        setIsActive(isActive);
        setPokemon(
            {
                name: data.data['name'],
                picture: data.data['sprites']['front_default'],
                types: data.data['types'].map((t) => t['type']['name'])
            }
        );
    }

    return (
        <div className="flex items-center">
            <button disabled={isActive} onClick={() => handleClick()} className="disabled:opacity-25 border rounded-full p-3 bg-purple-900 text-white hover:bg-pink-500 transition-all ease-linear duration-200">
                {text}
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 w-6 animate-spin " + (isActive ? "opacity-100" : "opacity-0")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
        </div>
    )
}


export default SpinningButton;