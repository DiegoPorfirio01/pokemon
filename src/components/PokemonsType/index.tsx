import { resetPagination, setTypePokemons, setPagination } from "@/reducers/typesSlice"
import api from "@/services/api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { Link, useParams } from "react-router-dom"
import { SkeletonCard } from "../Pokemons/SkeletonCard"
import PokemonCard from "../Pokemons/PokemonCard"
import { ArrowLeft } from "lucide-react"
import InfinityScroll from "../InfinityScroll"
import NotFoundPokemonsType from "./NotFoundPokemonsType"

const PokemonsType = () => {
  const [ isLoading, setIsLoading ] = useState(true) 
  
  const typePokemons = useSelector((state) => state.types.typePokemons)
  const pagination = useSelector((state)=> state.types.pagination)

  const dispatch = useDispatch()

  const { type }  = useParams()

  const loadPokemonsType = async () => {
    const { data : {pokemon} } = await api.get(`/type/${type}`)

    if(Array.isArray(pokemon)) {
      pokemon.sort((a, b) => a.pokemon.name.localeCompare(b.pokemon.name) )
    }

    dispatch(setTypePokemons(pokemon))
    dispatch(resetPagination())
    setIsLoading(false);
  }

  useEffect(()=> {
    loadPokemonsType()
  }, [])

  return (
    <>
      <Link to="/">
        <ArrowLeft width={50} height={30} className="rounded-primary text-[#FFCB05] bg-[#2d71b8] cursor-pointer" />
      </Link>
      <div className="my-16 flex items-center justify-center">
        <h1 className={`font-extrabold text-5xl rounded-3xl p-4 ${type === 'shadow' ? "text-black" : "text-white" } bg-${type}`}>{type}</h1>
      </div>
      <div className="flex flex-col items-center">     
        <div className="grid sm:grid-cols-4 w-full gap-7 mx-4">
          { isLoading ? (
              Array(8).fill(0).map((_, index) => <SkeletonCard key={index}/>)
            ) : (
              typePokemons.map(({pokemon}, index) => index + 1 <= pagination && <PokemonCard name={pokemon.name} key={index} />)
            )
          } 
        </div>
        { 
          !isLoading && typePokemons.length > 0 && ( <InfinityScroll text={'Load more...'} action={() => dispatch(setPagination())} /> )
        }
        { 
          !isLoading && typePokemons.length === 0 && ( <NotFoundPokemonsType /> )
        }
      </div>
    </>
  )
}

export default PokemonsType