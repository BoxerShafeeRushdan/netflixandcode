const express = require('express');
const app = express();
const seed = require('./seed');
const{User,Show} = require("./index");
const {sequelize} = require('./db');

const port = 1738;

app.use(express.json());

app.listen(port, async() => {
    await seed
    console.log("\x1b[36m",`Server is listening on http://localhost:${port}`)
})


app.get('/', async (req, res) => {
    res.send("Sup")
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json({users})
})

app.get('/shows', async (req, res) => {
    const shows = await Show.findAll();
    res.json({shows})
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json({user})
})

app.get('/shows/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    res.json({show})
})

app.post('/users', async (req, res) => {
    const newUser = await User.create(req.body);
    res.send('Created!')
})

app.delete('/users/:id', async (req, res) => {
    await User.destroy({
        where: {id: req.params.id}
    })
    res.send('Deleted!')
})

app.put('/users/:id', async (req, res) => {
    await User.update(req.body, {
        where: {id: req.params.id}
    })
    res.send("Updated!")
})


