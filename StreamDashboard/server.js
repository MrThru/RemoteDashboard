const express = require('express')
const cors = require('cors');

const app = express()

app.use(express.text());
app.use(express.static("../"));

// app.use(cors())

// app.use(cors({
//     origin: 'https://127.0.0.1'
// }));

let userData = {};

app.post('/sendUserData', async (req, res) => {
    let data = JSON.parse(req.body);
    userData = data;
    console.log(userData.drivePower);
    res.send({success: "Success"}); 
});

app.post('/getUserData', async (req, res) => {
    res.send(userData);
});


app.listen(3000, ()=> {
    console.log("Node Server Started")
})