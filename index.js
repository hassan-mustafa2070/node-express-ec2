import express from "express"

const app = express()

const PORT = 80 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Api is listening on port ${PORT}`)
})

app.get("/",(req,res)=> res.json("My Api is running"))