import express from 'express';

const app = express();

app.listen(3000 , () => {
    console.log('listening on port 3000');
    console.log("Server is Running on Port 3000 !!");
});