import dbConnect from "../config/db.js";
import {
  insertMascota,
  getMascota,
  getMascotas,
  updateMascota,
  deleteMascota,
} from "../services/mascota.js";
import { handleHttp } from "../utils/error.handle.js";

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getMascota(id);
    const data = response || "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req, res) => {
  try {
    const response = await getMascotas();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await updateMascota(id, req.body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async (req, res) => {
  try {
    const responseItem = await insertMascota(req.body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteMascota(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
