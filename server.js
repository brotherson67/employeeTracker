const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connections');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE apiRoutes
app.use('/api', apiRoutes);

// START SERVER AFTER DATABASE CONNECTION
db.connect(err => {
    if (err) throw err;
    console.log('You\'ve connected to the database.');

    // CONNECTION FUNCTION
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
