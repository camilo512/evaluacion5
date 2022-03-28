import { Navigate, Outlet } from 'react-router-dom';
//7. llevar los datos del imput al componenten Pokemons.js importar useSelector para hacer la validacion con el userName y traer el userName por redux del componente index de src. ir a POkemons
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

    const userName= useSelector(state => state.userName);

		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(userName){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;