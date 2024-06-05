import {  BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={} />
          <Route path='/pokemon/:name' element={} />
          <Route path='/pokemon/type/:type' element={} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
