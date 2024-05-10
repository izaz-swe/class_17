const ShopModel = require("../models/Shop")
const getAllShopInfo = async (ctx) => {
  try {
    const shopData = await ShopModel.getAllShopInfo();
    ctx.response.ok("Shop Details Fetched", shopData);
  } catch (error) {
    ctx.response.fail("Shop Data Not Fetched.")
  }
};
const createShop = async (ctx) => {
  try {
    const data = ctx.request.body;
    const shopData = await ShopModel.createShop(data);
    ctx.response.created("New Shop Created", shopData);
  } catch (error) {
    ctx.response.fail("Shop creation Failed.")
  }
};
module.exports = {
  getAllShopInfo,
  createShop
}