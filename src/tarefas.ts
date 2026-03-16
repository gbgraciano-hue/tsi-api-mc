import express, {Request, Response} from "express";
import tarefasRoutes from "./routes/tarefas";


const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tarefas", tarefasRoutes)


// app.post("/tarefas", (req: Request, res: Response) => {
//     const {titulo} = req.body;

//     const novaTarefa: Tarefa = {
//         id: tarefas.length + 1,
//         titulo: titulo,
//         concluida: false
//     }

//     tarefas.push(novaTarefa);
//     res.status(201).json(novaTarefa);
// });

// app.put("/tarefas/:id", (req: Request, res: Response) => {
//     const id = Number(req.params.id);

//     const tarefa = tarefas.find(t => t.id == id);

//     if(!tarefa) {
//         return res.status(404).json({erro : "Tarefa não encontrada"});
//     }

//     const {titulo, concluida} = req.body;

//     tarefa.titulo = titulo ?? tarefa.titulo,
//     tarefa.concluida = concluida ?? tarefa.concluida

//     res.json(tarefa);
// });

// app.delete("/tarefas/:id", (req: Request, res: Response) => {
//     const id = Number(req.params.id);

//     tarefas = tarefas.filter(t => t.id !== id);

//     res.json({
//         mensagem: "Tarefa Removida"
//     });
// });

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`);
});

