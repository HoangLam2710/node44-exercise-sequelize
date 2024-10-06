import express from "express";
import userRoutes from "./user.router.js";
import restaurantRoutes from "./restaurant.router.js";
import orderRoutes from "./order.router.js";

const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/restaurant", restaurantRoutes);
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;
