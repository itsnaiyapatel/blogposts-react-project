const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const db = require('./models');

// start server with database

db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Sever is running on ${PORT}`);
    }) ;
});