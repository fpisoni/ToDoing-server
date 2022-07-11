require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    const express = require('express');
    const port = process.env.PORT || 5000;
    const app = express();
    const routes = require('./routes/routes');
    
    app.use(express.json());
    app.use('/api/v1',routes);
    app.listen(port, (err) =>{
        if (err) console.log(err);
        console.log(`Server is running on port: ${port}`);
    }); 
});
