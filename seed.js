const {sequelize} = require('./db');
const{User,Show} = require("./index");
async function seed(){
    await sequelize.sync({foece:true});
    let brock = await User.create({emailAdress:"brock@box.com",password:"123"})
    let misty = await User.create({emailAdress:"misty@box.com",password:"000"})
    let ash = await User.create({emailAdress:"ash@box.com",password:"111"})

    let sherlock = await Show.create({title:"Sherlock",genre:"Mystery",rating:"10/10",status:"unwatched"})



}
