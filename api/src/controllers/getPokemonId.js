
const axios = require("axios"); //Importa la librería axios para realizar solicitudes HTTP
const { API_POKEMON } = require("../utils/urls");// Importa la URL base de la API de Pokémon
const { Pokemon, Type } = require("../db");

const getPokemonId = async (req, res) => { //fun asincronica

    try {
        const { id } = req.params; 

        if (isNaN(id)) { 
            const pokemonDetail = await Pokemon.findOne({
                where: { id }, include: [{ model: Type, attributes: ["name"] }]

            })
            res.json(pokemonDetail);
            console.log("a ver si andaaaaa")
            
            if (!pokemonDetail) { //si no se encuentra el pokémon en la base de datos
                res.status(404).json({ error: "Pokemon no encontrado" })
            }  
            
            
        }
        const response = await axios.get(`${API_POKEMON}/${id}`);
        pokemonDetail = response.data;
        const {name, sprites, stats, heigth, weigth} = response.data
        const pokemon={
            id,
            name,
            img: sprites.front_default, //toma la imagen por defecto del pokemon
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            heigth,
            weigth
        }
        res.status(200).json(pokemon)
    } catch (error) {
        console.error("Error obteniendo el Pokémon:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getPokemonId
};
