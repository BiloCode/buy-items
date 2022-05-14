import Controller from "../types/Controller";

const defaultRoute: Controller = (_, res) => {
  res.status(200).send("Welcome to the api");
};

export default defaultRoute;
