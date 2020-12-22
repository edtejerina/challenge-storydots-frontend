import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    // extraer los valores
    const { name, main } = result;

    if(!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p>Temperatura Máxima:
                    {main.temp_max }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    {main.temp_min }  <span> &#x2103; </span>
                </p>
                <p>Presión:
                    {main.pressure }hPa
                </p>
                <p>Humedad:
                    {main.humidity }%
                </p>
            </div>
        </div>
     );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;