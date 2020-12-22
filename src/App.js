import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
import MapView from './components/MapView';

function App() {

  // state del formulario
  const [search, setSearch] = useState('');
  const [consult, setConsult] = useState(false); //Si es true significa que se envio el formulario
  const [result, setResult] = useState({}); //Contiene el objeto con el clima de la ciudad buscada
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAPI = () => {
        //Si la consulta se realizo (true)
        if(consult) {
          const url = `/api/weather/?name=${search}`;
          fetch(url)
          .then(res => res.json())
          .then(res => {
            //En caso de que no existan resultados cambio el state de error
            if(res.code === 404) {
              setError(true);
            } else {
                setError(false);
            }
            //cambiando el state de resultado y consulta
            setResult(res)
            setConsult(false);
          })
        }
        
    } 
    fetchAPI();
    // eslint-disable-next-line
  },[consult]);

  return (
    <Fragment>
        <Header 
          title='Clima'
        />

        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <Form search={search} setSearch={setSearch} setConsult={setConsult} />
                    </div>
                    <div className="col m6 s12">
                        {error ? <Error message="No hay resultados" /> : <Weather result={result} />}
                    </div>
                </div>
            </div>
        </div>    
        <div className="map-container">
          {error ? null : <MapView city={result}/>}
        </div>
    </Fragment>
  );
}

export default App;
