import { useParams } from "react-router-dom"
import Card from "./Card"
import { ArrowLeft } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { setPokemon } from "@/reducers/pokemonSlice"
import api from "@/services/api"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "../ui/spinner"
import { Link } from "react-router-dom"
import AboutList from "./AboutList"
import StatsList from "./StatsList"

const PokemonInfo = () => {
  const {name} = useParams();

  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon.pokemon)
  const [ isLoading, setIsLoading ] = useState(true)

  const loadPokemon = async () => {
    try {
      const { data } = await api.get(`pokemon/${name}`)
      dispatch(setPokemon(data)) 
      setIsLoading(false)
    } catch (error) {
      console.error(error)      
    }
  }

  useEffect(()=> {
    loadPokemon()
  }, [name])

  return (
    <>
    <Link to="/">
      <ArrowLeft width={50} height={30} className="rounded-primary text-[#FFCB05] bg-[#2d71b8] cursor-pointer" />
    </Link>
    { isLoading ?
     (
        <div className="flex justify-center mt-20 text-[#2d71b8]">
          <LoadingSpinner  className="flex h-1/4 w-1/4 mt-20"/>
        </div>
        ) : (
        <div className="my-5 sm:my-20 flex flex-col sm:flex-row items-center justify-center gap-2">
            <Card pokemon={pokemon} />
            <div className="shadow-current shadow-sm w-full h-[500px] sm:w-[550px] bg-${pokemon.types[0].type.name} p-5 rounded-3xl bg-neutral-50">
              <AboutList height={pokemon.height} weight={pokemon.weight} abilities={pokemon.abilities}/>
              <StatsList stats={pokemon.stats}/>
            </div>
        </div> 
      )}
    </>
  )
}

export default PokemonInfo