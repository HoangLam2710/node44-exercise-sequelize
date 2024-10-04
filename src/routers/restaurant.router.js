import express from "express";
import {
  getLikeRestaurant,
  toggleLikeRestaurant,
  getRateRestaurant,
  createRateRestaurant,
} from "../controllers/restaurant.controller.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/:res_id/like-res", getLikeRestaurant);
restaurantRoutes.post("/:res_id/like-or-unlike", toggleLikeRestaurant);

restaurantRoutes.get("/:res_id/rate-res", getRateRestaurant);
restaurantRoutes.post("/:res_id/rate-res", createRateRestaurant);

export default restaurantRoutes;
