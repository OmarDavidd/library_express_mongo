const Book = require("../models/libro");

const bookService = {
  getAllBooks: async () => {
    try {
      const books = await Book.find();
      if (!books) {
        return { msg: "NO se encontraron libros", books };
      }
      return { msg: null, books };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  getBookById: async (id) => {
    try {
      const book = await Book.findById(id);
      if (!book) {
        return { msg: "NO se encontró el libro", book };
      }
      return { msg: null, book };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  getBooksByYear: async (year) => {
    try {
      const books = await Book.find({ publicationYear: year });
      if (!books) {
        return { msg: "NO se encontraron libros", books };
      }
      return { msg: null, books };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  getBooksByEditionNumber: async (editionNumber) => {
    try {
      const books = await Book.find({ editionNumber: editionNumber });
      if (!books) {
        return { msg: "NO se encontraron libros", books };
      }
      return { msg: null, books };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  addBook: async (bookData) => {
    try {
      const newBook = new Book(bookData);
      await newBook.save();
      return { msg: null, book: newBook };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  updateBook: async (id, bookData) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, bookData, {
        new: true,
      });
      if (!updatedBook) {
        return { msg: "NO se encontró el libro", book: null };
      }
      return { msg: null, book: updatedBook };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
  deleteBook: async (id) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        return { msg: "NO se encontró el libro", book: null };
      }
      return { msg: null, book: deletedBook };
    } catch (error) {
      return { msg: error, data: null };
    }
  },
};

module.exports = bookService;
