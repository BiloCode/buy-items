import path from "path";
import morgan from "morgan";
import express from "express";

import apiConfiguration from "../api";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.use("/api", apiConfiguration);

app.set("port", process.env.PORT || 3000);

export default app;
