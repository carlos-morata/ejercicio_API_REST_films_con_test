const fetchFilm = require('../utils/fetchFilms')

// Leer
const getFilm = async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const Title = req.params.title;
        let films = await fetchFilm.getFilm(apiKey, Title);
        res.status(200).json(films);
    }
    catch (error) {
        console.log(`ERROR -> ${error.stack}`);
        res.status(404).json({msj: `ERROR -> ${error.stack}`});
    }
}

// Crear
const createFilm = async (req, res) => {
    console.log(req.body)

    try {
        const data = req.body;
        let answer = await fetchFilm.postFilm(data)
        res.status(200).json({message : "Se ha guardado Titanic"})
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// Editar
const editFilm = async (req, res) => {
    console.log(req.body)
    res.status(200).json({id: 0, message: `Se ha actualizado Titanic`});
}

// Eliminar
const deleteFilm = async (req, res) => {
    console.log(req.body)

    const id = req.body.id;

    res.status(200).json({id: id, message: `Se ha borrado la película con ID:`+req.body.id})
}

module.exports = {
    getFilm,
    createFilm, 
    editFilm,
    deleteFilm
}