import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Header from "./components/Header"

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={'helo'} />
          <Route path='/pokemon/:name' element={'helo'} />
          <Route path='/pokemon/type/:type' element={'helo'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp