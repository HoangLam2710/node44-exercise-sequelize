import { OK, BAD_REQUEST, INTERNAL_SERVER } from "../../const.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const getListUserLikeRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;

    const likeResExist = await model.like_res.findAll({
      where: { res_id },
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

const toggleLikeRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    // cuz don't have use authen so get userId from body
    // in real project, should use authen to get userId
    const { userId } = req.body;

    const likeResExist = await model.like_res.findOne({
      where: { res_id, user_id: userId },
    });

    if (likeResExist) {
      // cuz don't have field is_deleted to soft delete so use destroy to hard delete
      await model.like_res.destroy({
        where: { res_id, user_id: userId },
      });
      return res.status(OK).json({ message: "success", data: null });
    }

    const likeResNew = await model.like_res.create({
      user_id: userId,
      res_id: Number(res_id),
      date_like: Date.now(),
    });
    return res.status(OK).json({ message: "success", data: likeResNew });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

const getListUserRateRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;

    const rateResExist = await model.rate_res.findAll({
      where: { res_id },
    });

    if (!rateResExist) {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Rate restaurant not found" });
    }

    return res.status(OK).json({ message: "success", data: rateResExist });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

const createRateRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const { userId, amount } = req.body;

    const rateResExist = await model.rate_res.findOne({
      where: { res_id, user_id: userId },
    });

    if (rateResExist) {
      return res
        .status(OK)
        .json({ message: "Rate already exists", data: null });
    }

    const rateResNew = await model.rate_res.create({
      user_id: userId,
      res_id: Number(res_id),
      amount,
      date_rate: Date.now(),
    });
    return res.status(OK).json({ message: "success", data: rateResNew });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

export {
  getListUserLikeRestaurant,
  toggleLikeRestaurant,
  getListUserRateRestaurant,
  createRateRestaurant,
};
