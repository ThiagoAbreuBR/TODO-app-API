import express  from "express";

const app = express()

app.get('/usuarios', function (req,res) {
    res.send("Rota ativada com GET USUARIOS") 
})

app.get('/tarefas', function (req,res) {
    res.send("Rota ativada com GET TAREFAS")
})

app.listen(3000)