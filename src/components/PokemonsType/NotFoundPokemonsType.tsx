import pikachu from '@/assets/pikachu.jpeg'
import { Search } from 'lucide-react'

const NotFoundPokemonsType = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <img src={pikachu} alt="" />
        <div className='rounded-primary bg-slate-300 p-3 flex gap-4 items-center'>
          <Search />
          <h1 className='text-3xl'>Not Found</h1>
        </div>
      </div>
    </>
  )
}

export default NotFoundPokemonsType