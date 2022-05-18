import Request from "../../utils/Request";
import ItemModel from "../../models/Item/Model";

type Body = {
  name: string;
  price: number;
  imageUrl: string;
};

const createItemController = Request.handler<Body>(async (req, res) => {
  const { name, price, imageUrl } = req.body;

  const newItem = new ItemModel({
    name,
    images: [
      {
        url: imageUrl,
      },
    ],
    price: {
      value: price,
    },
  });

  const createdItem = await newItem.save();

  res.status(202).send({
    item: createdItem || null,
    created: newItem === createdItem,
  });
});

export default createItemController;
