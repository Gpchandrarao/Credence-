const Movie = require("../models/bookModel");

const createMovieDetails = async (req, res) => {
  const book = new Movie(req.body);
  try {
    await book.save();
    res.status(201).json({ book: book });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error + "Internal Server Error" });
  }
};

const getAllData = async (req, res) => {
  try {
    const books = await Movie.find({});
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error + "Internal Server Error" });
  }
};

const getDataById = async (req, res) => {
  try {
    const book = await Movie.findById(req.params.id);
    if (!book) return res.status(404).json("Movie not found");
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error + "Internal Server Error" });
  }
};

const updateDataById = async (req, res) => {
  try {
    const book = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json("Movie not found");
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error + "Internal Server Error" });
  }
};
const deleteDataById = async (req, res) => {
  try {
    const book = await Movie.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json("Movie not found");
    // await Movie.remove();
    res.send("Movie Date Delete Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error + "Internal Server Error" });
  }
};

module.exports = {
  createMovieDetails,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
};
