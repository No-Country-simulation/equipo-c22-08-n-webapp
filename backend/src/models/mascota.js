import { Schema, model } from "mongoose";

const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    sexo: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MascotaModel = model("Mascota", ItemSchema);
export default MascotaModel;
