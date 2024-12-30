import dotenv from "dotenv";
dotenv.config();
import express  from "express"

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(res, req)=> {
    res.send("Hello, Sameer ")
})


app.listen(PORT, ()=>{
    console.log(`connected to port ${PORT}`);
    
})