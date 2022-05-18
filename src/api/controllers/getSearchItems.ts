import Request from "../../utils/Request";
import ItemModel from "../../models/Item/Model";

const getSearchItems = Request.handler(async (req, res) => {
  const { name } = req.params;

  const itemSearched = await ItemModel.find(
    { name: { $regex: name, $options: "i" } },
    { _id: 1, name: 1, price: 1 }
  );

  res.status(200).send(itemSearched);
});

export default getSearchItems;
