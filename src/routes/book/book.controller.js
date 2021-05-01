const router = require("express").Router();
const bookService = require("./book.service");
const validateBook = require("./controls/book.validator");
const books = require("./controls/books.data");

//GET BOOK LIST
router.get("/book", getAll);
async function getAll(req, res) {
  await bookService
    .getAll()
    .then((data) => res.json(data))
    .catch((error) => res.status(error.statusCode).json(error));
}

//GET BOOK LIST BY ID
router.get("/book/:id", getById);
async function getById(req, res) {
  const bookId = req.params.id;
  await bookService
    .getById(bookId)
    .then((data) => res.json(data))
    .catch((error) => res.status(401).json(error));
}

//Add BOOK in LIST
router.post("/book", create);
async function create(req, res) {
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.error.details[0].message);
    return;
  }
  await bookService
    .create(req.body)
    .then((data) => res.json(data))
    .catch((error) => res.status(401).json(error));
}

//UPDATE BOOK
router.put("/book/:id", update);
async function update(req, res) {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Not Found");
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.error.details[0].message);
    return;
  }

  await bookService
    .update(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((error) => res.status(401).json(error));
}

//DELETE
router.delete("/book/:id", deleteBookById);
async function deleteBookById(req, res) {
  const bookId = req.params.id;
  await bookService
    .deleteBookById(bookId)
    .then((data) => res.json(data))
    .catch((error) => res.status(401).json(error));
}

module.exports = router;
