import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.log("Error de conexión a MongoDB: " + error);
        process.exit(1);
    }
};
