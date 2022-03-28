import React, { useState } from 'react';
//10. llevar datos del imput a redux. importar useDispach
import { useDispatch } from 'react-redux';
//1. llevar los datos del imput al componenten Pokemons.js, importar useNavegate
import { useNavigate } from 'react-router-dom';
const Login = () => {

    //6. llevar datos del imput a redux.crear estado para guardar e.value.target para controlar el imput. 
    //7. llevar datos del imput a redux. pasar el dato del formulario por redux, crear la config de redux, cartpeta redux, archivo index.js
    // y en el index.js de la raiz del proyecto tambien hacer la nconfig incial de redux. ir a index.js de src
    const [ userName, setUserName ] = useState("");
    //11. llevar datos del imput a redux. crear funcion dispacht para usar en el submit
    const dispatch = useDispatch();

    //2. llevar los datos del imput al componenten Pokemons.js, crear variable
    const navigate = useNavigate();

    // 5. llevar datos del imput a redux. crear funcion onSumit para que se ejecute en el formulario
    const submit = e =>{
        e.preventDefault();
        console.log(userName)
        // 12. llevar datos del imput a redux. usar el dispacht, una action
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName
        })
        //13. llevar datos del imput a redux. impiar imput
        setUserName("")

        //3. llevar los datos del imput al componenten Pokemons.js, ejecutar el Navigate
        //4. llevar los datos del imput al componenten Pokemons.js, pasarle al navigate por propos la ruta de POkemons
        //5. llevar los datos del imput al componenten Pokemons.js crear ruta protegida, componente ProtectedRoutes, ir a APP y crear un route y ahi colocar las rutas protegidas
        navigate("/pokemons");
    }

    return (
        <div>
            {/* 4. llevar datos del imput a redux. crear formulario */}
            <form action="" onSubmit={submit}>
                <input className='header__search-input'
                    type="text"
                    placeholder='Enter your name'
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}
                    required
                />
                <button className='button_success' > <i className="fas fa-share"></i> Submit</button>
                
            </form>
        </div>
    );
};

export default Login;