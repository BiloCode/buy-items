import { Router } from "express";

import paramsEmpty from "../middlewares/paramsEmpty";

import defaultRoute from "../controllers/default";
import createItem from "../controllers/createItem";
import getItemById from "../controllers/getItemById";
import getSearchItems from "../controllers/getSearchItems";
import getItemsForSale from "../controllers/getItemsForSale";

const app = Router();

app.post("/", createItem);

app.get("/", getItemsForSale);
app.get("/:id", paramsEmpty, getItemById);
app.get("/search/:name", paramsEmpty, getSearchItems);

app.get("*", defaultRoute);

export default app;
