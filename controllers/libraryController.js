const bookService = require("../services/libraryService");

const libraryController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks();
      console.log(books);
      if (books.msg) {
        return res.render("Error404", { title: "Error", error: data.msg });
      }
      return res.render("biblioteca/allBooks", {
        title: "Library",
        books: books.books,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (book.msg) {
        return res.render("Error404", { title: "Error", error: book.msg });
      }
      return res.render("biblioteca/getBook", {
        title: "Library",
        book: book.book,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  getBooksByYear: async (req, res) => {
    try {
      const books = await bookService.getBooksByYear(
        req.query.year ? parseInt(req.query.year) : 0,
      );

      if (books.msg) {
        return res.render("Error404", { title: "Error", error: books.msg });
      }
      return res.render("biblioteca/allBooks", {
        title: "Library",
        books: books.books,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  getBooksByEditionNumber: async (req, res) => {
    try {
      const books = await bookService.getBooksByEditionNumber(
        req.query.edition ? parseInt(req.query.edition) : 0,
      );
      if (books.msg) {
        return res.render("Error404", { title: "Error", error: books.msg });
      }
      return res.render("biblioteca/allBooks", {
        title: "Library",
        books: books.books,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  getNewBookForm: async (req, res) => {
    try {
      return res.render("biblioteca/formBook", {
        title: "New Book",
        book: null,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  addBook: async (req, res) => {
    try {
      const book = await bookService.addBook(req.body);
      if (book.msg) {
        return res.render("Error404", { title: "Error", error: book.msg });
      }
      return res.redirect("/biblioteca");
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  getUpdateBookForm: async (req, res) => {
    try {
      const book = await bookService.getBookById(req.params.id);
      if (book.msg) {
        return res.render("Error404", { title: "Error", error: book.msg });
      }
      return res.render("biblioteca/formBook", {
        title: "Update Book",
        book: book.book,
      });
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  updateBook: async (req, res) => {
    try {
      const book = await bookService.updateBook(req.params.id, req.body);
      if (book.msg) {
        return res.render("Error404", { title: "Error", error: book.msg });
      }
      return res.redirect("/biblioteca");
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await bookService.deleteBook(req.params.id);
      if (book.msg) {
        return res.render("Error404", { title: "Error", error: book.msg });
      }
      return res.redirect("/biblioteca");
    } catch (error) {
      res.render("Error404", { title: "Error", error: error });
    }
  },
};

module.exports = libraryController;
