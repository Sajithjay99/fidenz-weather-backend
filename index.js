import 'dotenv/config';
import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", weatherRoutes);


app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on port:${process.env.PORT || 3000}`)
);

