import express from "express";
import restaurantRoutes from "./restaurant.router.js";
import orderRoutes from "./order.router.js";

const rootRoutes = express.Router();

rootRoutes.use("/restaurant", restaurantRoutes);
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;
