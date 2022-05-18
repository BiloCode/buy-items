import ItemModel from "../../models/Item/Model";
import Request from "../../utils/Request";

const getItemsForSale = Request.handler(async (req, res) => {
  const items = await ItemModel.find(
    {},
    { createdAt: 0, updatedAt: 0, __v: 0 }
  );

  res.status(200).send(items);
});

export default getItemsForSale;
