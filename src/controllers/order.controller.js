import { OK, BAD_REQUEST, INTERNAL_SERVER } from "../../const.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const createOrder = async (req, res) => {
  try {
    // cuz don't have use authen so get userId from body
    // in real project, should use authen to get userId
    const { userId, foodId, amount, discountCode, arrSubId } = req.body;

    const orderNew = await model.orders.create({
      user_id: userId,
      food_id: foodId,
      amount,
      discount_code: discountCode,
      arr_sub_id: arrSubId,
    });
    return res.status(OK).json({ message: "success", data: orderNew });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error", data: null });
  }
};

export { createOrder };
