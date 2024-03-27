//Taken from Ejaz (2020) and Niakaté (2023)

//Importing packages needed
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

// Create storage engine for the bucket in MongoDB
function upload() {
  const mongodbUrl= `mongodb+srv://randiellt:english123@cluster0.ni8ty3s.mongodb.net/GrantTracker?retryWrites=true&w=majority`;
  const storage = new GridFsStorage({
    url: mongodbUrl,
    file: (req, file) => {
      return new Promise((resolve, _reject) => {
        const fileInfo = {
          filename: file.originalname,
          bucketName: "offerGrants",
        };
        resolve(fileInfo);
      });
    },
  });

  return multer({ storage });
}

//Exporting upload function
module.exports = { upload };