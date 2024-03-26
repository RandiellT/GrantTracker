// const  upload = require('../models/offerGrantsModel');
// const router = require("express").Router();

// router.get('/', (req, res) => {
// gfs.files.find().toArray((err, files) => {
//     // Check if files
//     if (!files || files.length === 0) {
//     res.render('index', { files: false });
//     } else {
//     files.map(file => {
//         if (
//         file.contentType === 'file/pdf'
//         ) {
//         file.isImage = true;
//         } else {
//         file.isImage = false;
//         }
//     });
//     res.render('index', { files: files });
//     }
// });
// });


// // Uploading a multiple files

// // router.post('/upload', upload().array('files'), (req, res) => {
// //     res.redirect('/');
// // });
//     //   res.status(200).json({ text: "Files uploaded successfully !" });
//     // catch (error) {
//     //   console.log(error);
//     //   res.status(400).json({
//     //     error: { text: `Unable to upload files`, error },
//     //   });
//     // }
// //   });

// // @route GET /files
// // @desc  Display all files in JSON

// router.get('/files', (req, res) => {
// gfs.files.find().toArray((err, files) => {
//     // Check if files
//     if (!files || files.length === 0) {
//     return res.status(404).json({
//         err: 'No files exist'
//     });
//     }

//     // Files exist
//     return res.json(files);
// });
// });

// // @route GET /files/:filename
// // @desc  Display single file object
// router.get('/files/:filename', (req, res) => {
// gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//     return res.status(404).json({
//         err: 'No file exists'
//     });
//     }
//     // File exists
//     return res.json(file);
// });
// });

// // @route GET /image/:filename
// // @desc Display Image
// router.get('/file/:filename', (req, res) => {
// gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//     return res.status(404).json({
//         err: 'No file exists'
//     });
//     }

//     // Check if image
//     if (file.contentType === 'file/pdf') {
//     // Read output to browser
//     const readstream = gfs.createReadStream(file.filename);
//     readstream.pipe(res);
//     } else {
//     res.status(404).json({
//         err: 'Not a pdf file'
//     });
//     }
// });
// });

// // @route DELETE /files/:id
// // @desc  Delete file
// router.delete('/files/:id', (req, res) => {
// gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, data) => {
//     if (err) {
//     return res.status(404).json({ err: err });
//     }

//     res.redirect('/');
// });
// });


// module.exports = router;