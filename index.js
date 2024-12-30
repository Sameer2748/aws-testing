import dotenv from "dotenv";
dotenv.config();
import express  from "express"

const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json())

app.get("/",(req,res )=> {
    res.send("Hello World")
})


app.listen(PORT, ()=>{
    console.log(`connected to port ${PORT}`);
    
})