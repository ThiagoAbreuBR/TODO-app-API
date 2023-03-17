import express  from "express";
import controllerUsuarios from "../controllers/usuario-controller.js";
import controllerTarefas from "../controllers/tarefa-controller.js";

const app = express();

app.use(express.json())

controllerUsuarios(app)
controllerTarefas(app)


app.listen(3000)
