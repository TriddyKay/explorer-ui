import React, {useState} from 'react'
import './App.css';
import axios from "axios"
import { useAsyncEffect } from './hooks/customHooks';

export const App = () => {
  const [allPokemon, setAllPokemon] = useState<any[]>([])

  useAsyncEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/pokemon')
      setAllPokemon(response.data)
    } catch (e: unknown) {
      console.error('unable to fetch pokemon', e)
    }
  }, [])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-8 gap-4">
        {allPokemon.map((pokemon: any, index: number) => {
          return (
            <div>
              <button className="hover:bg-gray-100 py-2 px-4 border border-gray-400 rounded shadow">
                <h1 className="text-1xl">{pokemon.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={''}/>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
