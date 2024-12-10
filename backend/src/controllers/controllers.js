import { User } from "../models/user.js";

export const register = async (req, res) => {
    const { email, password, nombre, rol = "usuario", tipo = "normal" } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) throw { code: 11000 };

        user = new User({ email, password, nombre, rol, tipo });
        await user.save();

        return res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario" });
        }
        return res.status(500).json({ error: "Error de servidor" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) return res.status(403).json({ error: "No existe este usuario" });

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword) return res.status(403).json({ error: "Contraseña incorrecta" });

        return res.json({ message: "Inicio de sesión exitoso" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};

export const infoUser = async (req, res) => {
    try {
        const user = await User.findById(req.uid).lean();
        return res.json({ email: user.email, uid: user.id });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};

