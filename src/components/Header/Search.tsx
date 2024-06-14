import { setFilterPokemons } from "@/reducers/pokemonsSlice";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ScanSearch } from "lucide-react";

import { Input } from "../ui/input";

import { setFilterType } from "@/reducers/typesSlice";

const Search = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterPokemons = useSelector((state) => state.pokemons.filterPokemons);
  const filterType = useSelector((state) => state.types.filterType);

  const [searchValue, setSearchValue ] = useState('');
  const [filter, setFilter] = useState([]);
  const [open, setOpen] = useState(false);

  const resetValues = () => {
    setSearchValue('')
    setOpen(false)
    setFilter([])
  }

  useEffect(() => {
    loadFilterPokemons();
    loadFilterType();
  }, []);

  const loadFilterPokemons = async () => {
    try {
      const { data } = await api.get('/pokemon?limit=20000');

      if (Array.isArray(data.results)) {
          data.results.sort((a, b) => a.name.localeCompare(b.name));
      }

      dispatch(setFilterPokemons(data.results))

      return;
    } catch (error) {
      console.error(error)      
    }
  }

  const loadFilterType = async () => {
    try {
      const { data } = await api.get('/type');

      if (Array.isArray(data.results)) {
        data.results.sort((a, b) => a.name.localeCompare(b.name));
      }

      dispatch(setFilterType(data.results))

      return;
    } catch (error) {
      console.error(error)      
    }
  }

  const handleSearchInput  = (value) => {
    if(! value) {
      resetValues();
      return;
    }

    setOpen(true);
    setSearchValue(value)

    const filteredPokemons = filterPokemons.filter((pokemon) => pokemon.name.startsWith(value));
    const filteredTypes = filterType.filter((type) => type.name.startsWith(value));

    setFilter([...filteredTypes, ...filteredPokemons]);
  }

  const onSearch = (item) => {
    item.url.includes('pokemon') ?
      navigate(`/pokemons/${item.name}`) : navigate(`/pokemons/type/${item.name}`) 
  }

  return  (
    <>
      <div>
        <div className="flex items-center cursor-pointer">
            <Input placeholder="name or type" value={searchValue} onChange={(e) => handleSearchInput(e.target.value.toLocaleLowerCase()) } />
        </div>
        {
          open && (
            <div className="z-10 max-h-72 overflow-auto absolute m-2 w-[285px] flex flex-col items-center gap-1 bg-neutral-50 p-2 rounded-md font-mono shadow-md">
              {
                filter.map((item) => 
                  <div key={item.name} className="flex justify-between w-full items-center cursor-pointer hover:bg-slate-100 p-2 rounded-md" onClick={() => onSearch(item)}>
                    <span className="capitalize">{item.name.replaceAll('-', ' ')}</span>
                    <span className={item.url.includes('pokemon') ? 
                      'font-medium letter-spacing: -0.05em p-1 rounded-sm text-white  bg-primary' : 
                      'font-medium letter-spacing: -0.05em p-1 rounded-sm text-white  bg-slate-500' }
                    >
                      {item.url.includes('pokemon') ? 'Pokemon' : 'Type'}
                    </span>
                  </div>
                )
              }
            </div>
          )
        }
       
      </div>  
    </>
  )
}

export default Search