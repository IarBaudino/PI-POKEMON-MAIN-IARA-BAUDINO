/* 📍 POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos). */
const axios = require("axios")
const { Pokemon, Type } = require("../db");

const createPokemon = async (req, res) => {
    
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;
        console.log(name)
        const newPokemon = await Pokemon.create({ //creo el pokemon en la BD utilizando el modelo.
            name: name,
            image: image,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            height: height,
            weight: weight,
            
        });
        const arrayTypes = []; //creo un array vacio donde almacenare los tipos de pokemon.
        if (Array.isArray(types)) { 
            for(const type of types) {
                const tipo = await Type.findOrCreate({ 
                    where: {
                        name: type,
                    },
                });
                await newPokemon.addTypes(tipo[0]);
            };
            
        }
        const pokemondb =await Pokemon.findOne(({where: {name}, include: [{model: Type, attributes: ["name"], through: {attributes: []}}]}))
        return res.status(200).json(pokemondb); // si todo el try se resulve sin errores devuelvo el nuevo pokemon
        
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports= {createPokemon};


