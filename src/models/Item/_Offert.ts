import { prop } from "@typegoose/typegoose";

class Offert {
  @prop({ required: true })
  startAt!: Date;

  @prop({ required: true })
  finishAt!: Date;

  @prop({ required: true, min: 0, max: 1 })
  discount!: number;
}

export default Offert;
