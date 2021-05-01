const express = require("express");
const bookRoute = require("./src/routes/book/book.controller");

const port = process.env.PORT || 8499;

function create() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api", bookRoute);

  app.listen(port, function () {
    console.log(`Server listening on the port::${port}`);
  });
}

create();
