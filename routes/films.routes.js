const filmsController = require('../controllers/films.controller');
const router = require('express').Router();

// GET http://localhost:3000/api/films/:title
router.get("/:title", filmsController.getFilm);

// POST http://localhost:3000/api/films/
router.post("/", filmsController.createFilm);

// PUT http://localhost:3000/api/films/
router.put("/", filmsController.editFilm);

// DELETE http://localhost:3000/api/films
router.delete("/", filmsController.deleteFilm);

module.exports = router;