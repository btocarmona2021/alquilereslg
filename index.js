import express from 'express';
import cors from 'cors';
import routerComod from "./routes/ComodidadRoute.js";
import routerDispon from "./routes/disponibilidadRoute.js";
import routerPropied from "./routes/PropiedadRoute.js";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1',routerComod);
app.use('/api/v1',routerDispon);
app.use('/api/v1',routerPropied);


app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
