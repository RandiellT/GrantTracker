const { upload } = require("../models/writeProposalFilesModel");

//Routing using express
let router = require("express").Router();


// Upload a single file
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


// Download a file by id
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




  router.put("/rename/file/:fileId", async (req, res) => {
    try {
      const { fileId } = req.params;
      const { filename } = req.body;
      await bucket.rename(new mongoose.Types.ObjectId(fileId), filename);
      res.status(200).json({ text: "File renamed successfully !" });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: { text: `Unable to rename file`, error },
      });
    }
  });


//Exporting router 
module.exports = router;


