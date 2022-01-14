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
    
    //Add if watched
    
    if(sherlock.status === "watched"){
        await ash.addShow(sherlock);
    }else{
        console.log("Unwatched!") 
    }


    if(sherlock.status === "watched"){
        await misty.addShow(peekyblinders);
    }else{
        console.log("Unwatched!") 
    }
   
   
    if(sherlock.status === "watched"){
        await brock.addShow(topboy);
    }else{
        console.log("Unwatched!") 
    }
   

    console.log("db seeded!")

}

module.exports = seed()