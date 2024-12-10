import SolicitudModel from "../models/Solicitud.js";

export const createSolicitud = async (req, res) => {
  try {
    const { user_id, mascota_id, phone } = req.body;
    const newSolicitud = await SolicitudModel.create({ user_id, mascota_id, phone }); 
    res.status(201).json(newSolicitud); 
  } catch (error) {
    res.status(500).json({ error: "Error al crear la solicitud", details: error.message });
  }
}
export const updateSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    const solicitud = await SolicitudModel.findById({ _id: id });
    console.log({"solicitud": solicitud.status})
    console.log({"status": req.body.status})
    solicitud.status = req.body.status;
    const newSolicitud = await SolicitudModel.findOneAndUpdate({ _id: id }, solicitud, { new: true });
    res.status(201).json(newSolicitud); 
  } catch (error) {
    res.status(500).json({ error: "Error al crear la solicitud", details: error.message });
  }
}
export const getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await SolicitudModel.find()
      .populate("user_id", "name email") 
      .populate("mascota_id", "name description"); 

    res.status(200).json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener solicitudes", details: error.message });
  }
};
export const getSolicitud = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await SolicitudModel.findById({ _id: id });
      const data = response || "NOT_FOUND";
      res.send(data);
    } catch (e) {
      handleHttp(res, "ERROR_GET_ITEM");
    }
  };