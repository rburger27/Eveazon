const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace <YOUR_MONGODB_URI> with your actual MongoDB URI)
mongoose.connect('mongoose.connect('mongodb+srv://rburger27:kehmhWfG0a5vArSU@eveazon.imk4iek.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
