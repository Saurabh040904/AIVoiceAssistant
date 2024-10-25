const express = require('express');
const app = express();
const cors = require('cors');
const { spawn } = require('child_process');

app.use(cors());

app.get('/', (req, res) => {
    const python = spawn('python', ['main.py']);
})

app.listen(3000, () => {
    console.log("server running");
});