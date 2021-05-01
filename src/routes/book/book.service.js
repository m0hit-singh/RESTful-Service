const books = require("./controls/books.data");

async function getAll() {
  return books;
}

async function getById(id) {
  const book = books.find((b) => b.id === parseInt(id));
  if (book) return book;
  return `No book found for ID: ${id}`;
}

async function create(info) {
  const book = {
    id: books.length + 1,
  };

  const keys = Object.keys(info);
  for (let key of keys) {
    book[key] = info[key];
  }
  books.push(book);

  return book;
}

async function update(id, info) {
  const book = books.find((item) => item.id === parseInt(id));

  const index = books.indexOf(book);
  books.splice(index, 1);

  const keys = Object.keys(info);

  for (let key of keys) {
    book[key] = info[key];
  }
  books.push(book);

  return book;
}

async function deleteBookById(id) {
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) return `No book found for ID: ${id}`;
  const index = books.indexOf(book);
  books.splice(index, 1);
  return book;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBookById,
};
