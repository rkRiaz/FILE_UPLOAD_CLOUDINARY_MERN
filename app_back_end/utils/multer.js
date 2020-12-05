


const multer = require("multer");
const path = require("path"); 
// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.fieldname + '-' + file.originalname)
  }
  }),
  fileFilter: (req, file, cb) => {
    // console.log(file)
    let ext = path.extname(file.originalname);
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
















// const multer = require('multer')
// const path = require('path')

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'client/public/images')
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, file.fieldname + '-' + file.originalname)
// //     }
// // })

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     },
//     // fileFilter: (req, file, cb) => {
//     //     const types = /jpeg|jpg|png|gif/
//     //     const extName = types.test(path.extname(file.originalname).toLowerCase())
//     //     const mimeType = types.test(file.mimetype)

//     //     if(extName && mimeType) {
//     //         cb(null, true)
//     //     } else {
//     //         new Error('Only Supports Images')
//     //     }
//     // } 
// })

// module.exports = upload