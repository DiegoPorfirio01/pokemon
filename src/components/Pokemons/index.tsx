import { setPagination, setPokemons } from "@/reducers/pokemonsSlice";
import api from "@/services/api"
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { SkeletonCard } from "./SkeletonCard";
import PokemonCard from "./PokemonCard";
import InfinityScroll from "../InfinityScroll";
import { LoadingSpinner } from "../ui/spinner";

const Pokemons = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons.pokemons)
  const pagination = useSelector((state) => state.pokemons.pagination)

  const loadPokemons = async () => {
    try {
      const { data: {results, next} } = await api.get(`/pokemon?limit=24`);

      if(Array.isArray(results)) {
        results.sort((a ,b) => a.name.localeCompare(b.name))
      }

      dispatch(setPokemons(results))  
      dispatch(setPagination(next))

      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  const loadMorePokemons = async () => {
    try {
      const { data: {results, next} } = await api.get(pagination);

      if(Array.isArray(results)) {
        results.sort((a ,b) => a.name.localeCompare(b.name))
      }
  
      dispatch(setPokemons([...pokemons, ...results]))
      dispatch(setPagination(next))

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])


  return (
    <>
      <div className="my-20 flex items-center justify-center">
        <h1 className="font-extrabold text-5xl text-primary">Pokedex</h1>
      </div>
      <div className="flex flex-col items-center justify-center">     
        <div className="grid sm:grid-cols-4 w-full gap-7 mx-4">
          {
            pokemons.map((item, index) => <PokemonCard name={item.name} key={index} />)
          } 
        </div>
        {  
          ! isLoading &&  <InfinityScroll  text={'Load More...'} action={loadMorePokemons} />
        }
      </div>
    </>
  )
}

export default Pokemons