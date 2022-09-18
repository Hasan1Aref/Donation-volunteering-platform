const express= require('express');
const bodyParser=require('body-parser')
const app=express();
const postsRoute=require('./routes/posts');
app.use(bodyParser.json());
app.use('/posts',postsRoute);
app.use('/users',postsRoute);



module.exports=app;