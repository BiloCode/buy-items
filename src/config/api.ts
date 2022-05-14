import { Application } from "express";

import defaultRoute from "../controllers/default";
import createItem from "../controllers/createItem";
import updateItem from "../controllers/updateItem";
import getAllItems from "../controllers/getAllItems";
import getItemById from "../controllers/getItemById";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", defaultRoute);

  app.post("/api/items", createItem);
  app.get("/api/items", getAllItems);
  app.put("/api/items/:id", updateItem);
  app.get("/api/items/:id", getItemById);
};
