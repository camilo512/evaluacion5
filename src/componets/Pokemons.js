import axios from 'axios';
import React, { useEffect, useState } from 'react';


//8. llevar los datos del imput al componenten Pokemons.js importar useselector
import { useSelector } from 'react-redux';
import PokemonsCards from './PokemonsCards';
import { useNavigate } from 'react-router-dom';


const Pokemons = () => {

    const userName = useSelector(state => state.userName );
    const [ types, setTypes ] = useState([]);
    const [ pokemons, setPokemons  ] = useState([]);
    // estado para capturar la info del input
    const [ pokemonName, setpokemonName ] = useState("");
    const navigate = useNavigate();

    //pagination
    const [ page, setPage ] = useState(1);
    const itemNumber = 4;
    const lastIndex = page * itemNumber;
    const fistIndex = lastIndex - itemNumber;
    const totalpages = Math.ceil(pokemons?.length/itemNumber)
    const pokemonPaginated = pokemons?.slice(fistIndex,lastIndex);
    const pagesNumbers =[]
    for(let i = 1; i <= totalpages; i++){
        pagesNumbers.push(i)
    }

    //1. Consumir APi Pokemons. usar userselector
    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
            .then(res => setPokemons(res.data.results))
           
         axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results)) 
    }, []);

    const submit = e =>{
        e.preventDefault();
        navigate(`/pokemons/${pokemonName}`);
    }

    const haldleType = e =>{
        // console.log(e.target.value)
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }
    // console.log(types)

 
    return (
        <div>
    {/*        <h1>look for your pokemon</h1>
            <p className='welcome-message'>Welcome {userName}</p>

                <div className="select">
                    <select className='header__search-input' onChange={haldleType}>
                        <option >Select an Type </option>
                      
                        {
                            types.map(types => (
                                <option key={types.name} value={types.url} >
                                    {types.name} 
                                </option>
                            ))
                        }
                    </select>
                </div>  */}

<div className='container'>
        <div className='location'>
        <h1>Welcome {userName}</h1>
        <ul className='location__list'>
            <select className='header__search-input' onChange={haldleType}>
                <option >Select an Type </option>
                      
                    {
                        types.map(types => (
                        <option key={types.name} value={types.url} >
                            {types.name} 
                        </option>
                            ))
                        }
            </select>
                    <form  onSubmit={submit} >
                    <div className='container'> 
                        
                  
                    <label htmlFor="pokemons-name" ></label>
                    <input  className='header__search-input'
                    type="text" 
                    placeholder='Search for your favorite pokemon'
                    id="pokemons-name"
                    value={pokemonName}
                    onChange={e => setpokemonName(e.target.value)}
                    />
                    <button className='button_success' >
                    <i className="fas fa-search"></i>  Search
                    </button>
                    </div>
                </form>
          
        </ul>
        </div>
      </div>

         
    
             
                <ul className='pokemons-list'>
                {
                pokemonPaginated.map(pokemons =>(
                    //  2. consumir API Pokemon, ir a componente POkemonsCard, donde esta el map para traerlo por this.props.first
                        <PokemonsCards 
                        pokemonsUrl={pokemons.url ? pokemons.url : pokemons.pokemon.url} 
                        key={pokemons.url ? pokemons.url : pokemons.pokemon.url}/>
                 ))
                }
               
            </ul> 
                <button className='button_delete_circle' onClick={() => setPage(page - 1)}
                disabled={page <=1}>
                 <i className="fas fa-backward"></i>   
                </button>
                {page} of {totalpages}
                <button className='button_delete_circle' onClick={() => setPage(page + 1)}
                disabled={page >= totalpages}
                > <i className="fas fa-forward"></i>
                </button>
               {/*  <div>
                    {pagesNumbers.map(page =>(
                        <button onClick={() => setPage(page)} key={page}>
                            {page}
                        </button>
                    ))}
                </div> */}
        </div>
        
    );
};

export default Pokemons;