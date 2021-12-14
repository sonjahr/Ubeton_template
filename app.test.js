const request = require("supertest");
const app = require('./app');


describe("Test the root path", () => {
  test("It should response the GET method", async () => {    
    return request(app)
      .get("/Ubeton")
      .expect("Hello Ubeton")
      .expect(200);
  });
});
