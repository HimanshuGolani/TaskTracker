import express from "express";
import cors from "cors";
import Dbconnect from "./mongoDb/DbConnect.js";

const port = 3000;

const app = express();

// middle wears
app.use(express.json());
app.use(cors());

// connecting to db function
Dbconnect();

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
