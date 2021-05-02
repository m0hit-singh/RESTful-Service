const request = require("supertest");
const app = require("../index");

describe("Book Endpoints", () => {
  it("should fetch all books", async () => {
    const res = await request(app).get("/api/book");
    expect(res.statusCode).toEqual(200);
  });

  it("should fetch a single book", async () => {
    const bookid = 1;
    const res = await request(app).get(`/api/book/${bookid}`);
    expect(res.statusCode).toEqual(200);
  });

  it("should create a new book", async () => {
    const res = await request(app).post("/api/book").send({
      title: "1345543",
      author: "asdf345543",
      ISBN: 1234567888,
    });
    expect(res.statusCode).toEqual(201);
  });

  it("should update a book", async () => {
    const res = await request(app).put("/api/book/1").send({
      title: "Microsoft SQL Server 2014",
      author: "Ray Rankins",
      ISBN: 9780134084473,
    });
    expect(res.statusCode).toEqual(200);
  });

  it("should delete a book", async () => {
    const res = await request(app).delete("/api/book/1");
    expect(res.statusCode).toEqual(200);
  });
});
