const express = require("express")
const axios = require("axios")
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


//Read
app.get("/products", async (req, res)=>{
    try{
        let response = await axios.get("https://dotnet-api-database-connection.azurewebsites.net/allProducts")

        res.send(response.data)
    }catch(error){
        console.log(error)
        res.status(500).send("Error occurred: " + error.message)
    }
})

//Create
app.post("/product", async (req, res)=>{
    try{
        let data = {
            Name:req.body.Name,
            Price:req.body.Price
        }

        let response = await axios.post("https://dotnet-api-database-connection.azurewebsites.net/product",data)


    res.status(201).send(response.data + " was added.")
    }catch(error){
        res.status(500).send("Error occurred while creating product")
    }

})




app.listen(PORT, ()=>{
    console.log("Listening to port" + PORT)
})