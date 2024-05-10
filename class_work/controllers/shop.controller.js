const ShopModel = require("../models/Shop")
const getShopDetails = async (ctx) => {
  try {
    const shopData = ShopModel.getShopDetails();
    ctx.body = {"successCode": "Shop Details Fetched", shopData};
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getShopDetails
}

