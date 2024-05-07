import mongoose from "mongoose";

const DbConnect = async () => {
  mongoose
    .connect(
      ` mongodb+srv://author123:author123@cluster0.scpivm0.mongodb.net/TaskTracker`
    )
    .then(() => {
      console.log("Data base connected succesfully..");
    })
    .catch((error) => {
      console.log("Some error occured while Connecting to the database", error);
    });
};

export default DbConnect;
