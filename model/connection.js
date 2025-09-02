const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://oviyaec23_db_user:jeevaovi2612@cluster0.dgu4bk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected successfully")
})
.catch((error)=>{
    console.log(error)
})