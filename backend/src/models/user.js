import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    rol: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    tipo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ["normal", "administrador"],
    },
});

// Hash de contraseña antes de guardar
userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    try {
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Falló el hash de contraseña");
    }
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcryptjs.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);
