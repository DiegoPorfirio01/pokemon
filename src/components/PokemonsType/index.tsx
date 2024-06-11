import { setPagination, setTypePokemons } from "@/reducers/typesSlice"
import api from "@/services/api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { Link, useParams } from "react-router-dom"
import { SkeletonCard } from "../Pokemons/SkeletonCard"
import PokemonCard from "../Pokemons/PokemonCard"
import { ArrowLeft } from "lucide-react"


const PokemonsType = () => {
  const [ isLoading, setIsLoading ] = useState(true) 
  
  const typePokemons = useSelector((state) => state.types.typePokemons)

  const dispatch = useDispatch()

  const { type }  = useParams()

  const loadPokemonsType = async () => {
    const { data : {pokemon} } = await api.get(`/type/${type}`)
    
    dispatch(setTypePokemons(pokemon))
    dispatch(setPagination(12))
    setIsLoading(false);
  }

  useEffect(()=> {
    loadPokemonsType()
  }, [])

  return (
    <>
      <Link to="/">
        <ArrowLeft width={50} height={30} className="rounded-full text-[#FFCB05] bg-[#2d71b8] cursor-pointer" />
      </Link>
      <div className="my-16 flex items-center justify-center">
        <h1 className={`font-extrabold text-5xl rounded-full  p-3 bg-${type}`}>{type}</h1>
      </div>
      <div className="flex items-center">     
        <div className="grid sm:grid-cols-4 w-full gap-7 mx-4">
          { isLoading ? (
              Array(4).fill(0).map((_, index) => <SkeletonCard key={index}/>)
            ) : (
              typePokemons.map(({pokemon}, index) => <PokemonCard name={pokemon.name} key={index} />)
            )
          } 
        </div>
      </div>
    </>
  )
}

export default PokemonsType