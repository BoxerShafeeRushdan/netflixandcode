const {sequelize} = require('./db');
const{User,Show} = require("./index");

async function seed(){
    await sequelize.sync({force:true});
    

    
    let brock = await User.create({emailAdress:"brock@box.com",password:"123"})
    let misty = await User.create({emailAdress:"misty@box.com",password:"000"})
    let ash = await User.create({emailAdress:"ash@box.com",password:"111"})

    let sherlock = await Show.create({title:"Sherlock",genre:"Mystery",rating:"10/10",status:"watched"})
    let peekyblinders = await Show.create({title:"Peeky Blinders",genre:"Thriller",rating:"10/10",status:"watched"})
    let topboy = await Show.create({title:"Top Boy",genre:"Thriller",rating:"9/10",status:"watched"})
    let topgear = await Show.create({title:"Top Gear",genre:"Documentary",rating:"7/10",status:"unwatched"})
    let lockeandkey = await Show.create({title:"Locke & Key",genre:"Mystery",rating:"8/10",status:"unwatched"})

    let strangerthings = await Show.create({title:"Stranger Things",genre:"Thriller",rating:"5/10",status:"unwatched"})
    let baki = await Show.create({title:"Baki",genre:"Anime",rating:"8/10",status:"unwatched"})
    let blackmirror = await Show.create({title:"Black Mirror",genre:"Docuumentary",rating:"10/10",status:"unwatched"})
    let boondocks = await Show.create({title:"Boondocks",genre:"Documentary",rating:"10/10",status:"unwatched"})
    let rickandmorty = await Show.create({title:"Rick and Morty",genre:"Mystery",rating:"10/10",status:"unwatched"})
    
    //Add if watched attempt 1
    if(sherlock.status === "watched"){
        await ash.addShow(sherlock);
    }else{
        console.log("Unwatched!") 
    }


    if(peekyblinders.status === "watched"){
        await misty.addShow(peekyblinders);
    }else{
        console.log("Unwatched!") 
    }
   
   
    if(topboy.status === "watched"){
        await brock.addShow(topboy);
    }else{
        console.log("Unwatched!") 
    }
   

    console.log("db seeded!")

}

module.exports = seed()