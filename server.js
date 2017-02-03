var express = require('express')

var path=require("path")

var app = express()

var multer=require("multer")
var upload = multer({ dest: 'uploads/' })

var port=process.env.PORT || 8080



app.post('/upload', upload.single('Choose a file..'), function (req, res) {
  res.json({
      name: req.file.originalname,
      filesizeBytes: req.file.size,
      filesizeMB: req.file.size/1000000
  })
})


app.use('/assets', express.static('assets'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
    
})




app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})