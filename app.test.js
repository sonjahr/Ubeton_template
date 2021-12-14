const request = require("supertest");
const app = require('./app');


describe("Test the root path", () => {
  test("It should response the GET method", async () => {    
    return request(app)
      .get("/sonja")
      .expect("Hello sonja")
      .expect(200);
  });
});
