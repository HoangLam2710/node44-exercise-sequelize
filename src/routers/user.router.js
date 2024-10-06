import express from "express";
import {
  getListRestaurantLikedByUser,
  getListRestaurantRatedByUser,
} from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.get(
  "/:user_id/list-restaurant-liked-by-user",
  getListRestaurantLikedByUser,
);

userRoutes.get(
  "/:user_id/list-restaurant-rated-by-user",
  getListRestaurantRatedByUser,
);

export default userRoutes;
