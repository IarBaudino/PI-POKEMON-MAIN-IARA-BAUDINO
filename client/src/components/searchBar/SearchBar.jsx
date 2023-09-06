import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => { //onSearch se utilizará para ejecutar la búsqueda cuando se haga clic en el botón Buscar.
  const [searchTerm, setSearchTerm] = useState(''); // se utiliza useState para iniciar el estado del componente, en searchTerm almaceno la busqueda del usuario y setSearchTerm actualiza ese estdo-

  const handleSearch = () => { // se ejecuta con el click al boton buscar
    
    if (searchTerm.trim() !== '') { // Verificar si el término de búsqueda no está vacío y es igual al nombre completo de un Pokémon
      onSearch(searchTerm.trim()); //searchTrim se asegura que la busqueda se realice si se ha ingresado el nombre completo
    }
  };

  return ( //en este bloque se crea la interfaz de usuario de la barra de busqueda
    <div>
      <input //permite al usuario ingresar su busqueda
        type="text"
        placeholder="Buscar Pokémon por nombre" 
        value={searchTerm} //el valor del campo de entrada se actualiza según el estado searchTerm
        onChange={(event) => setSearchTerm(event.target.value)} //manejador de eventos onChange en el imput
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;