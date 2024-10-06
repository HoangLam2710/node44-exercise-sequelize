import express from "express";
import {
  getListUserLikeRestaurant,
  toggleLikeRestaurant,
  getListUserRateRestaurant,
  createRateRestaurant,
} from "../controllers/restaurant.controller.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/:res_id/list-user-like-res", getListUserLikeRestaurant);
restaurantRoutes.post("/:res_id/like-or-unlike", toggleLikeRestaurant);

restaurantRoutes.get("/:res_id/list-user-rate-res", getListUserRateRestaurant);
restaurantRoutes.post("/:res_id/rate-res", createRateRestaurant);

export default restaurantRoutes;
