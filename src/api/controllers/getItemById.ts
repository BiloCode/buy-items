import Request from "../../utils/Request";
import ItemModel from "../../models/Item/Model";

const getItemById = Request.handler(async (req, res) => {
  const { id } = req.params;

  const itemSearched = await ItemModel.findById(id, {
    __v: false,
    updatedAt: false,
  });

  res.status(200).send(itemSearched);
});

export default getItemById;
