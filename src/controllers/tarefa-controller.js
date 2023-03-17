const controllerTarefas = (app) => {
    app.get('/tarefas', (req, res) => {
        res.send("Rota ativada com GET TAREFAS")
    })

    app.post('/tarefas', (req, res) => {
        res.send("Rota POST de usuario ativada:tarefas adicionado ao banco de dados")
    })
}

export default controllerTarefas