const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const matching = require('./Models/matching.js');
const mongoose = require('mongoose');
const { db } = require('./Models/matching.js');
require('dotenv').config()
port = process.env.PORT || 3000;
app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log('Server successfully started!');
});
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://klikToolDBTest0:kliktool@friendsformtest0.zr2dwal.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });
    
const connection = mongoose.connection;
// make sure that MongoDB connected successfully
connection.once('open', () => {
    console.log("MongoDB connected!!");
});

app.post("/matchingForm", (req,res)=>{

        const newMatchData = new matching({
            'Data': req.body.Data,
            'redditName': req.body.redditName
        })
        matching.create(newMatchData,(err,item)=>{
            if(err){
                console.log(err);
            }else{
                res.status(200).send();
            }

        }
        )
} )