const router = require('express').Router()
const {fileUpload} = require('../controllers/uploadController')
const upload = require('../utils/multer')


router.post('/upload', upload.array('files', 5), fileUpload)
// router.delete('/upload/:id',  fileDelete)


module.exports = router
