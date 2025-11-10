import 'dotenv/config';
import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();
app.use(cors());            
app.use(express.json());    
 
const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,                   
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`, 
  tokenSigningAlg: "RS256",
});

app.use("/api/weather", jwtCheck);
app.use("/api", weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
