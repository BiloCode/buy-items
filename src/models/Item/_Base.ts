import { modelOptions, prop, Severity } from "@typegoose/typegoose";

import Price from "./_Price";
import Offert from "./_Offert";
import Image from "../_Image";

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: "items", timestamps: true },
})
class Item {
  @prop({ required: true, minlength: 6, trim: true })
  name!: string;

  @prop({ type: () => Price })
  price!: Price;

  @prop({ type: () => [Image], required: true, default: [] })
  images!: Image[];

  @prop({ type: () => [Offert], required: true, default: [] })
  offerts?: Offert[];
}

export default Item;
