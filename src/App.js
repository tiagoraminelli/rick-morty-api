
import RickAndMorty from './img/RickAndMorty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';


function App() {
// funciones dentro de la APP
const [personajes, setPersonajes] = useState([]);
const respuestaApi = async () => {
  console.log("Haciendo peticion a la API");
  const api = await fetch('https://rickandmortyapi.com/api/character');
  const data = await api.json();
  setPersonajes(data.results);
};

  return (
      <div className="App">
        <header className="App-header">
          <h1 className='title'>Rick and Morty</h1>


        {personajes.length > 0 ? (<Characters personajes={personajes} setearPersonajes={setPersonajes} />)
        : // separador
        (
          <>
            <img src={RickAndMorty} className="img-home" alt="Rick and Morty" />
            <button onClick={respuestaApi} className='btn-search'>Ver Personajes</button>
          </>
        )}
        </header>
      </div>

  );
}

export default App;
