import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect("mongodb://localhost/buy-items");
    const message = `-- Database(${data.connection.db.databaseName}) connected --`;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

export const disconnectDatabase = () => mongoose.connection.close();

export default connectDatabase;
