import React from 'react';
import './search.css';
import { getAllCharacters } from '../../services/characterServices';

const Search = ({ onSearch }) => {
  const handleSearch = async () => {
    try {
      const data = await getAllCharacters();
      if (data) {
        onSearch(data); // Asegúrate de que onSearch esté definido
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="container-search">
      <div className="navbar">
        <button className="nav-button active">Teléfonos</button>
        <button className="nav-button">Laptops</button>
        <button className="nav-button">Cámaras</button>
        <button className="nav-button">Accesorios</button>
      </div>
      <h1>Comentarios de los Productos</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Insertar el link"
          className="input-field"
          id="input-search"
        />
        <button className="search-button" onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Search;
