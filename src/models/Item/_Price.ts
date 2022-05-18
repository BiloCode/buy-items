import { modelOptions, prop } from "@typegoose/typegoose";

import Currency from "../../types/Currency";

@modelOptions({ schemaOptions: { _id: false } })
class Price {
  @prop({ required: true, min: 1 })
  value!: number;

  @prop({ default: "pen" as Currency })
  currency?: Currency;
}

export default Price;
