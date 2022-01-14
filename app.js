const express = require('express');
const app = express();
const seed = require('./seed');
const{User,Show} = require("./index");
const {sequelize} = require('./db');
const res = require('express/lib/response');

const port = 1738;

app.use(express.json());

app.listen(port, async() => {
    await seed
    
    console.log("\x1b[36m",`Server is listening on http://localhost:${port}`)
})

//Home Page
app.get('/', async (req, res) => {
    res.send("Sup")
})

//Get all users & shows
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json({users})

})
app.get('/shows', async (req, res) => {
    const shows = await Show.findAll();
    res.json({shows})
})

//Get one user & show
app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id,{include: Show})
    res.json({user}  )
})
app.get('/shows/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id,{include: User})
    res.json({show})
    console.log(show)  
})


//Get all shows a user has watched
app.get('/users/allShows/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id,{include: Show})
    res.json({user}  )
})

//Create a user and show
app.post('/users', async (req, res) => {
    const newUser = await User.create(req.body);
    res.send('Created!')
})
app.post('/shows', async (req, res) => {
    const newShow = await Show.create(req.body);
    res.send('Created!')
})

//Get shows by genre
app.get('/shows/byGenre/:genre', async (req, res) => { 
    const show = await Show.findAll({where: {genre: req.params.genre}})
    res.json({show})
})

//Rate if watched & update for more seasons
app.put('/shows/:id', async (req, res) => {
    await Show.update(req.body, {
        where: {id: req.params.id}
    })
    res.send("Updated!")
})

//Remove show if series gets cancelled
app.delete('/shows/:id', async (req, res) => {
    await Show.destroy({
        where: {id: req.params.id}
    })
    res.send('Show Deleted!')
})


app.put('/users/:id', async (req, res) => {
    await User.update(req.body, {
        where: {id: req.params.id}
    })
    res.send("Updated!")
})



