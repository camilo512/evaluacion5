//1. llevar datos del imput a redux. iportar las rutas
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componets/Login';
import Pokemons from './componets/Pokemons';
import PokemonsInfo from './componets/PokemonsInfo';
import ProtectedRoutes from './componets/ProtectedRoutes';

function App() {
  return (

    // 2. llevar datos del imput a redux. generar las rutas
    <HashRouter>
      <div>
      <div className="App">
      <div className='header'></div>
      </div>
    
      </div>
        <Routes>
          {/* 3. llevar datos del imput a redux. ruta raiz, ir a al componente Login */}
          <Route path='/' element={<Login/>}/>
          {/* 6. llevar los datos del imput al componenten Pokemons.js, creadno las rutas progegidas y añadiendo el componete Protected a la ruta */}
          
          <Route element={<ProtectedRoutes/>}>
              <Route path='/pokemons' element={<Pokemons/>}/>
              <Route path='/pokemons/:id' element={<PokemonsInfo/>}/>
              
          </Route>
        </Routes>
    </HashRouter>
    
  );
}

export default App;
