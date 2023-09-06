const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: [],
    types: [],
};

const pokemonReducer = (state = initialState, action)=>{
    switch(action.type){
                      // case "ADD_FAV":
                     //         return{
//esto es un ejemplo//         ...state, //hace una copia del estado
                   //         myFavorites: action.payload, //toma una copia del estado y le suma el payload, o sea otro personaje mas.
                  //         allCharacters: action.payload,
                 //     };
    }
};

export default pokemonReducer;