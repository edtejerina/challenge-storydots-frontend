import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Form = ({search, setSearch, setConsult}) => {

    const [error, setError] = useState(false);

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        setSearch(e.target.value);
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();
        // validar
        if(search.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setConsult(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="El campo ciudad es obligatorio" /> : null }
            
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={search}
                    onChange={handleChange}
                    placeholder="ejemplo: La Plata"
                />
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <input  
                    type="submit"
                    value="Buscar Clima"
                    className="btn-large btn-block yellow accent-4 black-text"
                />
            </div>
        </form>
     );
}

Form.propTypes = {
    search : PropTypes.string.isRequired,
    setSearch : PropTypes.func.isRequired,
    setConsult : PropTypes.func.isRequired,
}
 
export default Form;