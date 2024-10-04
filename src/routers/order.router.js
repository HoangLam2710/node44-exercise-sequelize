import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/", createOrder);

export default orderRoutes;
