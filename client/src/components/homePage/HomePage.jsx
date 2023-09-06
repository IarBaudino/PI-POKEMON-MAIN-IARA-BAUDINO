import React, { useState, useEffect } from 'react';
import SearchBar from "../searchBar/SearchBar";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para almacenar los Pokémon.
  const [searchPoke, setsearchPoke] = useState(''); // Estado para el término de búsqueda.

  return (
    <div>
      <h2>Página Principal</h2>
      <SearchBar onSearch={handleSearch} />
      <PokemonCards pokemons={pokemons} />
    </div>
 
  );
};

export default HomePage;