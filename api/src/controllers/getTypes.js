/* 📍 GET | /types
-Obtiene un arreglo con todos los tipos de pokemones.
-En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
-Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí. */


const axios = require("axios");
const { Type } = require("../db");
const {API_POKEMON_TYPE} = require("../utils/urls")


const getTypes = async (req, res)=>{
    try{
        const typeBd = await Type.findAll();

        if(typeBd.length === 0){
            const response = await axios.get(API_POKEMON_TYPE);
            const typeApi = response.data.results;
            
            const typePromise = typeApi.map(async (type)=> {
                return await Type.create({name: type.url});
            });
            

            const types = await Promise.all(typePromise)
            res.status(200).json(types);
        }else{
            const dataAll = await Type.findAll();
            res.status(200).json(dataAll);
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports= getTypes;