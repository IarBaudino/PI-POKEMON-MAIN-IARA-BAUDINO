const { Router } = require ("express");
const typesRouter = Router();

const getTypes = require("../controllers/getTypes");

typesRouter.get("/", getTypes);


module.exports= typesRouter;