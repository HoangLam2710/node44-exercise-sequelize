import { OK, BAD_REQUEST, INTERNAL_SERVER } from "../../const.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const getListRestaurantLikedByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const likeResExist = await model.like_res.findAll({
      where: { user_id },
    });

    if (!likeResExist) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Like restaurant not found" });
    }

    return res.status(OK).json({ message: "success", data: likeResExist });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

const getListRestaurantRatedByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const rateResExist = await model.rate_res.findAll({
      where: { user_id },
    });

    if (!rateResExist) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Like restaurant not found" });
    }

    return res.status(OK).json({ message: "success", data: rateResExist });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

export { getListRestaurantLikedByUser, getListRestaurantRatedByUser };
