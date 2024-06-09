import api from "@/services/api"
import { useEffect, useState } from "react"
import { SkeletonCard } from "./SkeletonCard"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const PokemonCard = ({name}) => {
  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadPokemon = async () => {
    try {
      const { data } = await api.get(`/pokemon/${name}`)
      setPokemon(data);
      console.log(data.types[0].type.name)
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
      <Card className={`bg-${pokemon.types[0].type.name} rounded-3xl transform transition duration-500 hover:scale-110 group cursor-pointer`}>
         <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <h1 className="text-white font-mono capitalize">{pokemon.name}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex flex-col gap-2 items-center">
                {
                  pokemon.types.map((item) => 
                    <div className={`drop-shadow-md p-2 rounded-xl bg-${item.type.name}`}>
                      <h3 className="text-white">
                          {item.type.name}
                      </h3>
                    </div>
                  )
                }
            </div>
            <img
              width={150}
              height={150}
              className="transform transition duration-500 group-hover:scale-150"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt="" 
            />
          </CardContent>
        </Card>
    </>
  )
}

export default PokemonCard