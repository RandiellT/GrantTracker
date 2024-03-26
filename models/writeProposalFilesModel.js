//const mongoose = require('mongoose');
//const config = require('./config/database');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

// Create storage engine
function upload() {
  const mongodbUrl= `mongodb+srv://randiellt:english123@cluster0.ni8ty3s.mongodb.net/GrantTracker?retryWrites=true&w=majority`;
  const storage = new GridFsStorage({
    url: mongodbUrl,
    file: (req, file) => {
      return new Promise((resolve, _reject) => {
        const fileInfo = {
          filename: file.originalname,
          bucketName: "filesBucket",
        };
        resolve(fileInfo);
      });
    },
  });

  return multer({ storage });
}

module.exports = { upload };