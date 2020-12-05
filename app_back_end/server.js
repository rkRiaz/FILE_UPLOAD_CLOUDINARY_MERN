require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const uploadRoute = require('./routers/uploadRoute')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('Welcome to Cloudinary file upload API :)'));
app.use('/api', uploadRoute)

const PORT = process.env.PORT || 8080
const MONGO_DB_URI = `mongodb://localhost:27017/filesUpload_cloudinary?readPreference=primary&appname=MongoDB%20Compass&ssl=false`

mongoose.connect(MONGO_DB_URI,
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true}
    )
    .then(() => {
        console.log(`Database Connected`)
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })





      