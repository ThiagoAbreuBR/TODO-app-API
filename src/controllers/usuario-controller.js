const controllerUsuarios = (app) => {
    app.get('/usuarios', (req, res) => {
        res.send("Ratreamento da aplicação sendo feita com nodemon")
    })

    app.post('/usuarios', (req, res) => {
        res.send(req.body)
    })
}

export default controllerUsuarios