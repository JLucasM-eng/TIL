const express = require("express")

const server = express()


server.get('/adria',()=>{
    console.log("Eu amo ela!")
})

server.listen(3000,()=>console.log("Server is running..."))