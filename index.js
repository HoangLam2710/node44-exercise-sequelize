import express from "express";
import cors from "cors";
import rootRoutes from "./src/routers/root.router.js";

const port = 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.use(rootRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
