import { setFilterPokemons } from "@/reducers/pokemonsSlice";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ScanSearch } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { setFilterTypes } from "@/reducers/typesSlice";
import { Input } from "./ui/input";

const Search = () => {
  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterPokemons = useSelector((state) => state.pokemons.filterPokemons);
  const filterTypes = useSelector((state) => state.types.filterTypes);

  const [searchValue, setSearchValue ] = useState('');
  const [filter, setFilter] = useState([]);

  const resetValues = () => {
    setSearchValue('')
    setFilter([])
  }

  useEffect(() => {
    loadFilterPokemons();
    loadFilterTypes();
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

  const loadFilterTypes = async () => {
    try {
      const { data } = await api.get('/type');

      if (Array.isArray(data.results)) {
          data.results.sort((a, b) => a.name.localeCompare(b.name));
      }

      dispatch(setFilterTypes(data.results))

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

    setSearchValue(value)

    const filteredPokemons = filterPokemons.filter((pokemon) => pokemon.name.startsWith(value));
    const filteredTypes = filterTypes.filter((type) => type.name.startsWith(value));

    setFilter([...filteredTypes, ...filteredPokemons]);
  }

  return  (
    <>
      <div className="flex items-center">
        <ScanSearch className="mr-2 h-12 w-12"  color="#ea580c"/>
          <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Control</span>/
          </kbd>
          </p>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Input placeholder="name or type" value={searchValue} onChange={(e) => handleSearchInput(e.target.value) } />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            { 
              filter.map((item) => 
                <CommandItem key={item.name} className="flex justify-between">
                  <span>{item.name.replaceAll('-', ' ')}</span>
                  <span className={item.url.includes('pokemon') ? 
                  'font-medium letter-spacing: -0.05em p-1 rounded-sm text-white  bg-primary' : 
                  'font-medium letter-spacing: -0.05em p-1 rounded-sm text-white  bg-slate-500' }>
                    {item.url.includes('pokemon') ? 'Pokemon' : 'Type'}
                  </span>
                </CommandItem>
              )
            }
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Search