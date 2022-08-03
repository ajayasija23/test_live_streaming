const express = require('express')
const fs = require('fs');
// Requiring Path from node modules
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, './assets')))
//app.use('/media', express.static(__dirname + '/assets'));

var url='assets/pun_playlist/test_playlist.m3u8';


app.get('/stream', (req, res) => {
    const file = fs.createReadStream(url);
    res.writeHead(200, { "Content-Type": "audio/mp3; codecs=PCM" });
    file.pipe(res);
});
app.get('/', (req, res) => {
    app.use(static);
    var employee = {  
        "success":       true,   
        "message":      "you have successfully created node hello world"
    }; 
    res.send(employee)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})