const {Router} = require ("express");
const pokemonsRouter = Router() 

const {getPokemon} = require ("../controllers/getPokemon")
const {getPokemonId} = require ("../controllers/getPokemonId")
const { createPokemon } = require("../controllers/createPokemon");


pokemonsRouter.get("/", async (req, res) => {
    const {name} = req.query;
    try{
        const allPokemon = await getPokemon(name)
        res.status(200).json(allPokemon)
    }catch (error){
        res.status(400).json({message: error.message})
    }
}); //maneja los errores de la respuesta de la getPokemon

pokemonsRouter.post("/", createPokemon);
pokemonsRouter.get("/:id", getPokemonId);


module.exports= pokemonsRouter;