import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { _id: false } })
class Image {
  @prop({ required: true })
  url!: string;

  @prop({ default: "" })
  name: string;
}

export default Image;
