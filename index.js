const express =require("express")

const booksRoute = require("./routes/booksRoute")


const app =express()

//middleware
app.use(express.json())

app.use(booksRoute)

//hom route
app.get("/", (req, res)=>{
    res.json("Welcome to our Library")
})

const PORT =5000;

app.listen(PORT, ()=>{
    console.log("server is running")
})