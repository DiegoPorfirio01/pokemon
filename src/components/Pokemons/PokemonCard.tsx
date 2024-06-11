import api from "@/services/api"
import { useEffect, useState } from "react"
import { SkeletonCard } from "./SkeletonCard"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link } from "react-router-dom"

const PokemonCard = ({name}) => {
  const [pokemon, setPokemon ] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadPokemon = async () => {
    try {
      const { data } = await api.get(`/pokemon/${name}`)
      
      setPokemon(data);

      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  
  useEffect(() => {
    loadPokemon()
  }, [])


  if(isLoading) {
    return (
      <>
        <SkeletonCard />
      </>
    )
  }

  return (
    <> 
      <Link to={`/pokemons/${name}`}>
        <Card 
          className={`bg-${pokemon.types[0].type.name} rounded-3xl transform transition duration-500 hover:scale-110 group cursor-pointer`}
        >
          <CardHeader>
            <CardTitle className="flex justify-between items-center text-white font-mono capitalize">
              {pokemon.name.replaceAll('-', ' ')}
              <div className="flex gap-2">
              {
                pokemon.types.map((item, index) => 
                  <div className={`drop-shadow-md p-2 rounded-xl bg-${item.type.name}`} key={index}>
                    <h3 className="text-white text-xs">
                        {item.type.name}
                    </h3>
                  </div>
                )
              }
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <img
              width={180}
              height={180}
              className="transform transition duration-500 group-hover:scale-150"
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt="" 
            />
          </CardContent>
        </Card>
      </Link>
    </>
  )
}

export default PokemonCard