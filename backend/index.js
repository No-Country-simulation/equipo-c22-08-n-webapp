import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();


const PORT = process.env.PORT;

app.get("/",(req,res)=>res.send(`Servidor corriendo en el puerto ${PORT}`))

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));