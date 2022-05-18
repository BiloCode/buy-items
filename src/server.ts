import app from "./config/app";
import connectDatabase from "./config/mongo";

const env = app.get("env");
const port = app.get("port");

const server = app.listen(app.get("port"), async () => {
  console.log(
    `-- App is running at http://localhost:${port} in ${env} mode --`
  );

  await connectDatabase();
});

export default server;
