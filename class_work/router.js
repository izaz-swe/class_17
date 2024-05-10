const Router = require("koa-router");
const { getShopDetails } = require("./controllers/shop.controller");

const router = new  Router();
router.get("/shop-details", getShopDetails);
module.exports = router;
