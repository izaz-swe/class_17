const fs = require("fs")

const createShop = async (data) => {
  let shopData = await JSON.parse(fs.readFileSync('data.json'));
  shopData.push(data);
  await fs.writeFileSync('data.json', JSON.stringify(shopData, null, 2));
  shopData = await JSON.parse(fs.readFileSync('data.json'));
  return shopData;
}
const getAllShopInfo = async () => {
  let shopData = await JSON.parse(fs.readFileSync('data.json'));
  return shopData;
}
module.exports = {
  createShop,
  getAllShopInfo
}