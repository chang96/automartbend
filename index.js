require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
const carsRoutes = require("./routes/index")
const mongoose = require("mongoose")
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
const connection = mongoose.connection
connection.once("open", function(){
    app.listen(PORT, function(PORT){
        console.log("running ad connected")
    })
})


app.use("/", (req, res)=> res.send("App Running"))
app.use("/cars", carsRoutes)

