const Router = require("koa-router");
const {  createShop, getAllShopInfo } = require("./controllers/shop.controller");


const router = new  Router();
router.get("/shop", getAllShopInfo);
router.post("/create", createShop)
module.exports = router;