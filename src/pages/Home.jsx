import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/characterServices';
import PersonajesList from '../components/PersonajesList';
import PersonajeCard from '../components/PersonajeCard';
import Search from '../components/SearchApi'; // Asegúrate de la ruta correcta

const Characters = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getCharactersData = async () => {
      try {
        const response = await getAllCharacters();
        if (response && response.results) {
          console.log(response);
          const { results } = response;
          console.log(results);
          setPersonajes(results);
        } else {
          console.log('Formato de datos inesperado', response);
        }
      } catch (error) {
        console.log("Ocurrió un error:", error);
      }
    };

    getCharactersData();
  }, []);

  const handleSearch = (data) => {
    if (data && data.results) {
      setPersonajes(data.results);
    }
  };

  return (
    <div className='bg-body-tertiary'>
      <Search onSearch={handleSearch} />
      <h2 className='text-center'>Vista de Comentarios</h2>
      <PersonajesList>
        {personajes.length === 0 ? (
          <p>Loading...</p>
        ) : (
          personajes.map((personaje) => (
            <PersonajeCard 
              key={personaje.id} 
              name={personaje.name} 
              image={personaje.image}
              status={personaje.status}
              species={personaje.species}
            />
          ))
        )}
      </PersonajesList>
    </div>
  );
};

export default Characters;
