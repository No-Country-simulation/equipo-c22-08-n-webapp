import MascotaModel from "../models/mascota.js";

const insertMascota = async (item) => await MascotaModel.create(item);
const getMascotas = async () => await MascotaModel.find({});
const getMascota = async (id) => await MascotaModel.findOne({ _id: id });
const updateMascota = async (id, data) => await MascotaModel.findOneAndUpdate({ _id: id }, data, { new: true });
const deleteMascota = async (id) => await MascotaModel.deleteOne({ _id: id });

export { insertMascota, getMascota, getMascotas, updateMascota, deleteMascota };
