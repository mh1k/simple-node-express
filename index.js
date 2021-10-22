const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello i am learing express js ...');
});

const users = [{ id: 0, name: "Mahmudul Hasan", email: "mahmudulhasan@gmail.com", phone: "01644872427" },
{ id: 1, name: "Ali Hossain", email: "alihossain@gmail.com", phone: "01818641112" },
{ id: 2, name: "Mostafizur Rahman", email: "mostafizur@gmail.com", phone: "01635873892" },
{ id: 3, name: "Ayan", email: "ayankabir@gmail.com", phone: "0181822333" }]



// use query 
app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(req.query.search);

    if (search) {

        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    };

});


// app method 

app.post('/users', (req, res) => {
    console.log('hitting the post', req.body);
    newUser = req.body // collected data from UI
    newUser.id = users.length //set id using array length
    users.push(newUser) // new user push on users
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users', (req, res) => {
    res.send(users);
});


app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    const user = users[id];
    res.send(user);
});



app.listen(port, () => {
    console.log('listening to port', port);
});