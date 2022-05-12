const Cars = require("../models/cars")
const home = function(req, res){
    res.send("App running...")
}

const addCars = function (req, res){
    const carAdDetails = req.body
    let addingAds = new Cars({
        name: carAdDetails.name,
        description: carAdDetails.description
    })
    addingAds.save().then(()=>{
        res.send({"response": "saved"})
    }).catch(e=>{
        res.send({"err": e})
    })
   
}


const deleteCars = function(req, res){

}


const getAllCars = function (req, res){

}


module.exports = {
    addCars,
    deleteCars,
    getAllCars,
    home
}