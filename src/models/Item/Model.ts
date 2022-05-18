import { getModelForClass } from "@typegoose/typegoose";

import Item from "./_Base";

const ItemModel = getModelForClass(Item);

export default ItemModel;
