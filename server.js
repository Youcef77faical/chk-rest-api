const express  = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Port = process.env.Port || 3000
const app = express();

const userRoutes = require("./routes/userRoutes")
dotenv.config()

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/User")
.then(()=>{console.log("connected mongoDb")})
.catch(()=>{console.log("error connected mongoDb")})
app.use(userRoutes)

app.listen(Port,()=>{console.log("server started in //http://localhost:3000  ")})