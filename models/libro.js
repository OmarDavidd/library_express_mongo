const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    editionNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false },
);

module.exports = mongoose.model("Book", bookSchema);
