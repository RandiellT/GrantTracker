//Taken from 

//Importing packages
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

// Create storage engine using upload function in MongoDB using GridFS 
function upload() {
  const mongodbUrl= `mongodb+srv://randiellt:english123@cluster0.ni8ty3s.mongodb.net/GrantTracker?retryWrites=true&w=majority`;
  const storage = new GridFsStorage({
    url: mongodbUrl,
    file: (req, file) => {
      return new Promise((resolve, _reject) => {
        const fileInfo = {
          filename: file.originalname,
          bucketName: "submitReports",
        };
        resolve(fileInfo);
      });
    },
  });

  return multer({ storage });
}

//Exporting upload function
module.exports = { upload };