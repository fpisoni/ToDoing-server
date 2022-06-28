require('dotenv').config({ path:'./config.env' });

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const dbo = require('./db/conn');
const app = express();

app.arguments(cors());
app.use(express.json());
app.use(require('./routes/record'));

app.listen(port, () =>{
    dbo.connectToServer(err => {
        if (err) console.error
    });
    console.log(`Server is running on port: ${port}`);
});
