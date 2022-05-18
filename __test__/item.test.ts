import "jest-extended";

import supertest from "supertest";

import app from "../src/config/app";
import connectDatabase, { disconnectDatabase } from "../src/config/mongo";

describe("Endpoint related to items", () => {
  let _id = "";

  beforeAll(async () => {
    await connectDatabase();
  });

  test("POST /items - should return 202 OK", async () => {
    const result = await supertest(app).post("/api/items").send({
      name: "Apple Touch",
      price: 100,
      imageUrl:
        "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg",
    });

    if (result.body.item) {
      _id = result.body.item._id;
    }

    expect(result.statusCode).toBe(202);
    expect(result.body).toMatchObject({ created: true });
  });

  test("GET /items/search/:name - return list item depended of query", async () => {
    const query = "apple";
    const result = await supertest(app).get(`/api/items/search/${query}`);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeArray();
    expect(result.body[0]).toContainKeys(["name", "price", "_id"]);
  });

  test("GET /items - return item for sale", async () => {
    const result = await supertest(app).get("/api/items");

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeArray();
  });

  test("GET /items/:id - return item by id", async () => {
    const result = await supertest(app).get(`/api/items/${_id}`);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeObject();
  });

  afterAll((done) => {
    disconnectDatabase();
    done();
  });
});
