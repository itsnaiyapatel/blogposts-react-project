const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const db = require('./models');

// static image folder

app.use('/images', express.static('images'));

// Create routes

const userRouter = require('./routes/Users');
app.use('/auth', userRouter);

const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);

const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);

const likeRouter = require('./routes/Likes');
app.use('/likes', likeRouter);

// start server with database

db.sequelize.sync().then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Sever is running on ${PORT}`);
    }) ;
});