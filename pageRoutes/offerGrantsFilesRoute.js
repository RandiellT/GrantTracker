//Taken from Ejaz (2020) and Niakaté (2023)

//Importing the upload function
const { upload } = require("../controllers/writeProposalFilesController");

//Routing using express
let router = require("express").Router();

// Uploading a multiple files
router.post("/upload/files", upload().array("files"), async (req, res) => {
    try {
      res.status(201).json({ text: "Files uploaded successfully !" });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: { text: `Unable to upload files`, error },
      });
    }
});

// Downloading a file by id
router.get("/download/files/:fileId", async (req, res) => {
    try {
      const { fileId } = req.params;
  
      // Check if file exists
      const file = await bucket.find({ _id: new mongoose.Types.ObjectId(fileId) }).toArray();
      if (file.length === 0) {
        return res.status(404).json({ error: { text: "File not found" } });
      }
  
      // set the headers
      res.set("Content-Type", file[0].contentType);
      res.set("Content-Disposition", `attachment; filename=${file[0].filename}`);
  
      // create a stream to read from the bucket
      const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));
  
      // pipe the stream to the response
      downloadStream.pipe(res);
    } catch (error) {
      console.log(error);
      res.status(400).json({error: { text: `Unable to download file`, error }});
    }
  });

//Exporting router 
module.exports = router;


