import express from "express";
import Connection from "./databas/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import Routes from "./routes/route.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);
const PORT = process.env.PORT || 3000;

Connection();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
