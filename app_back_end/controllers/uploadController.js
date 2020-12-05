const cloudinary = require("../utils/cloudinary");
const User = require("../models/User"); 
// const path = require("path"); 


exports.fileUpload = async(req, res, next) => {

    const uploader = async (path) => await cloudinary.uploads(path, 'projects/ecommerce/product_images')

    const urls = []

    const files = req.files

    for(const file of files) {
      const path = file.path
      const newPath = await uploader(path)
      urls.push(newPath)
    }

    res.status(200).json({
      message: "successfully uploaded",
      data: urls
    })




  // let multipleUpload = new Promise( async (resolve, reject) => {

  //   let upload_len = req.files.length
  //   ,upload_res = new Array()

  //     for(let i = 0; i <= upload_len+1; i++) {
  //         let file = req.files[i];
   
  //           cloudinary.uploader.upload(file.path,
  //             {
  //               public_id: `projects/ecommerce/product_images/${file.filename}`
  //             },
  //             (error, result) => {
  //               if(upload_res.length === upload_len) {
  //                 /* resolve promise after upload is complete */
  //                 resolve(upload_res)
  //               } 
  //               else if(result) {
  //                 /*push public_ids in an array */  
  //                 // upload_res.push(result.public_id);
  //                 upload_res.push(file.filename);
  //               }
  //               else if(error) {
  //                 console.log(error)
  //                 reject(error)
  //               }
  //           })
      
  //     } 
  // })

  // .then((result) => result)
  // .catch((error) => error)

  // /*waits until promise is resolved before sending back response to user*/
  // let upload = await multipleUpload; 
  // console.log("riaz")
  // // res.json({'response':upload})










// // has problem ....directly save image_name without waiting for file upload

//   try {
//     let user = new User({
//       name: req.body.name,
//       product_images_name: [],
//       cloudinary_id: []
//     })
//     req.files.map(file => {
//         cloudinary.uploader.upload(file.path, 
//         {
//           public_id: `projects/ecommerce/product_images/${file.filename}`
//         },
//        (error, result) => {
//           // user.cloudinary_id.push(result.public_id)
//           if(error) {
//             res.json("file not uploaded. try again")
//           }
//        })
//         user.product_images_name.push(`${file.filename}`)
//     })

//     res.json(user);
//     await user.save();
//   } catch (err) {
//     console.log(err);
//   }
// };





















// exports.fileDelete = async(req, res, next) => {
//   let cloudinary_id = req.params

//   try {
//     // Find user by id
//     let user = await User.findById('5fbbf67bf5b5a71bccdd4406');
//     // Delete image from cloudinary
//     await cloudinary.uploader.destroy(`projects/ecommerce/product_images/${user.product_images_name.find(i => i === 'e47306b0ef12dd99c1a26b875f91f87c')}`);
//     // Delete user from db
   
  
//   } catch (err) {
//     console.log(err);
//   }
//   // let users = await User.findOneAndUpdate(
//   //   {_id: '5fbbe8f14c0ba73290a99e86'},
//   //   {$pull: {'product_images_name': '6f2d282a37b325962778d4ca8d2bdc9b'}},
//   //   {new: true}
//   //   )
//   // console.log(users)










}
