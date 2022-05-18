import Request from "../../utils/Request";

const defaultRoute = Request.handler((_, res) => {
  res.status(200).send("Content Not Found");
});

export default defaultRoute;
