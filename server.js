const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiroutes');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API routes - load before HTML routes -- those catch everything else
app.post('/api', (req, res) => {
    res.json('post');
});

app.use('/', apiRoutes);

// HTML routes
app.use('/', htmlRoutes);



// Start the server on the port
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}!`));

