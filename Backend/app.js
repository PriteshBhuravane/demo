const dotenv=require('dotenv');
dotenv.config();
const express =require('express');
const cors=require('cors');
const app = express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const cookiesParse = require('cookie-parser');
const path = require('path');

connectToDb();
const _dirname=path.resolve();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookiesParse());

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

app.get('/',(req,res)=>{
    res.send("Hello world...")
});

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports=app