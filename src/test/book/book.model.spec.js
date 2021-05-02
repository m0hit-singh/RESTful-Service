describe("book.schema", () => {
  const schema = require("../../routes/book/controls/book.model");

  it("should return true when a valid model is provided", () => {
    const BOOK = {
      id: 1,
      title: "ABC",
      author: "XYZ",
      ISBN: 1234567890123,
    };

    const { error } = schema.validate(BOOK);
    expect(error).toBe(undefined);
  });
});
