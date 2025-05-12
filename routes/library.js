const express = require("express");
const route = express.Router();
const libraryController = require("../controllers/libraryController");

route.get("/", libraryController.getAllBooks);
route.get("/book/:id", libraryController.getBookById);
route.get("/year", libraryController.getBooksByYear);
route.get("/edition", libraryController.getBooksByEditionNumber);
route.get("/new/book", libraryController.getNewBookForm);
route.post("/new/book", libraryController.addBook);
route.put("/update/book/:id", libraryController.updateBook);
route.get("/update/book/:id", libraryController.getUpdateBookForm);
route.delete("/book/:id", libraryController.deleteBook);

module.exports = route;

/*
Obtener todos los libros
• Obtener un libro por su id
• Obtener los libros por su año de publicación
• Obtener los libros por su número de edición
• Crear un libro
• Actualizar un libro
• Eliminar un libro

*/
