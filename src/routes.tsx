import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Pokemons from "./components/Pokemons"
import Layout  from "./components/Layout"
import PokemonInfo from "./components/pokemonInfos"

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<PokemonInfo />} />
          <Route path='/pokemons/type/:type' element={'helo'} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp