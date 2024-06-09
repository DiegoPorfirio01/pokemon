import { setPokemons } from "@/reducers/pokemonsSlice";
import api from "@/services/api"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SkeletonCard } from "./SkeletonCard";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons.pokemons)

  const loadPokemons = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get('/pokemon?limit=24');

      if(Array.isArray(data.results)) {
        data.results.sort((a ,b) => a.name.localeCompare(b.name))
      }

      dispatch(setPokemons(data.results))  

      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])


  return (
    <>
      <div className="mb-20 flex items-center justify-center">
        <h1 className="font-medium text-4xl font-mono">Pokedex</h1>
      </div>
      <div className="flex items-center">     
        <div className="grid sm:grid-cols-4 w-full gap-7 mx-4">
          { isLoading ? (
              Array(4).fill(0).map((_, index) => <SkeletonCard key={index}/>)
            ) : (
              pokemons.map((item, index) => <PokemonCard name={item.name} key={index} />)
            )
          }
        </div>
      </div>
    </>
  )
}

export default Pokemons