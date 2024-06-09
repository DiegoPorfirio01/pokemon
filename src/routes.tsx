import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Pokemons from "./components/Pokemons"
import  Layout  from "./components/Layout"

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/' element={<Pokemons />} />
            <Route path='/pokemon/:name' element={'helo'} />
            <Route path='/pokemon/type/:type' element={'helo'} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp