const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/registration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

// Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

// Create Express.js App
const app = express();

// Use Body-Parser to parse JSON data
app.use(bodyParser.json());

// Define the /register POST endpoint
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password,
    });

    newUser.save()
        .then(() => {
            res.status(200).json({ message: 'Registration successful!' });
        })
        .catch((err) => {
            if (err.code === 11000) { // Duplicate key error (unique constraint violation)
                res.status(400).json({ message: 'Email already registered.' });
            } else {
                res.status(500).json({ message: 'Error during registration.' });
            }
        });
});

// Start the server node Mongo.js
app.listen(3001, () => {
    console.log('Server running on port 3000');
});

//Mongo

/*const mongoose=require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/registration",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>
{
    console.log('error');
})

const tutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const collection = mongoose.model('Tut', tutSchema);

// Data to be inserted into the MongoDB collection
const data = [
    {
        name: "Ayushman",
        email: "Ayushman123@gmail.com",
        password: "12345678", // It's good practice to use `password` instead of `Password`
    },
    {
        name: "Priya",
        email: "Priya123@gmail.com",
        password: "12345",
    },
    {
        name: "Avinash",
        email: "Avinash@gmail.com",
        password: "123456781",
    },
    {
        name: "Sakshi",
        email: "Sakshi@gmail.com",
        password: "1234567t1",
    },
];

// Insert multiple documents into the MongoDB collection
collection.insertMany(data)
    .then(() => {
        console.log('Data inserted successfully');
    })
    .catch((err) => {
        console.error('Insert error:', err);
    });*
    const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Parse incoming JSON data

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Create a new document using the 'Tut' model
    const newUser = new collection({
        name,
        email,
        password,
    });

    newUser.save()
        .then(() => {
            res.status(200).json({ message: 'User registered successfully!' });
        })
        .catch((err) => {
            if (err.code === 11000) {
                res.status(400).json({ message: 'Email already registered.' });
            } else {
                res.status(500).json({ message: 'Error registering user.' });
            }
        });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});*/
