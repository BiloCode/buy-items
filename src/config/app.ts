import path from "path";
import express from "express";

import { loadApiEndpoints } from "./api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.set("port", process.env.PORT || 3000);

loadApiEndpoints(app);

export default app;
