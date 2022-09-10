import React, {DependencyList, useEffect, useState} from 'react'
import './App.css';
import axios from "axios"



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
    <React.Fragment>
      <div className="App">
        {allPokemon.map((pokemon: any, index: number) => {
          return(
            <>
              <label>{pokemon.name}</label>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={''}/>
            </>
          )
        })}
      </div>
    </React.Fragment>
  );
}

function useAsyncEffect <T>(fun: () => Promise<T>, deps: DependencyList) {
  useEffect(() => { fun() }, deps)
}
