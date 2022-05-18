import RequestException from "../../types/RequestException";
import Request from "../../utils/Request";

const paramsEmpty = Request.middleware((req, _, next) => {
  const keys = Object.keys(req.params);

  if (keys.length === 0) {
    throw new RequestException("Query Params undefined", 404);
  }

  keys.forEach((key) => {
    if (!req.params[key]) {
      throw new RequestException("Some params contains null value", 404);
    }
  });

  next();
});

export default paramsEmpty;
