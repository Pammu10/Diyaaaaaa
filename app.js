const express = require('express');
const mongoose = require('mongoose');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/project", {useNewUrlParser: true});
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
const PlaceSchema = new mongoose.Schema({
    img: String,
    name: String,
    content: String,
    price: String
});

const Data = mongoose.model("Data", PlaceSchema)

// const data1 = new Data({
//     img: "https://www.equitypandit.com/wp-content/uploads/2018/06/pvr-cinemas-1.jpg",
//     name: "PVR",
//     content: "India's largest premium film exhibition company. Enjoy Indian and International cinema with delicious gourmet food.",
//     price: "500 - 2000"
// })

// const data2 = new Data({
//     img: "https://www.delhimetrotimes.in/photos/2021/03/vellore.jpg",
//     name: "Vellore Fort",
//     content: "Vellore Fort is a large 16th-century fort situated in heart of the Vellore city, in the state of Tamil Nadu, India built by Vijayanagara kings.",
//     price: "100"
// })
// const data3 = new Data({
//     img: "https://b.zmtcdn.com/data/pictures/7/69917/b603c779d1ea5395dcfa337cfa4d5f6f.jpg",
//     name: "Zaitoon",
//     content: "The art of perfect dining and the heart of pure food experience. An engaging and wholesome connection of happiness of eating well.",
//     price: "1000"
// })
// const data4 = new Data({
//     img: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/z2dj8ig6f6a8u8yg9sj0kn4dlwfj_Cup%20And%20Saucer%20Waterfalls.jpg",
//     name: "Cup and Saucer Waterfalls",
//     content: "The name of this waterfall is attributed to its unique shape that appears as if a cup of water is pouring its contents into a massive saucer. The gorgeous site can be best enjoyed from atop the hill.",
//     price: "100"
// })
// const data5 = new Data({
//     img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/3c/e2/2c/golden-temple-3.jpg?w=1200&h=-1&s=1",
//     name: "Golden Temple",
//     content: "The Sripuram Golden Temple is a sight to behold, and it is situated in Tirumalaikodi at Southern Vellore, Tamil Nadu. The golden temple sits inside a spiritual park or ‘Spiritual Oasis’.",
//     price: "100"
// })
// const data6 = new Data({
//     img: "https://crispyfriedopinions.com/wp-content/uploads/sites/105/2021/01/ChaiGalli_2.jpeg?v=1615302608&w=640",
//     name: "Chai Galli",
//     content: "An amazing cafe with a wide variety of cusines,this place has the youngster vibe and asthetics along with top notch service and taste.",
//     price: "1000"
// })
// const data7 = new Data({
//     img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/04/park-4263184_1280.jpg",
//     name: "Periyar Park",
//     content: "Periyar Park centrally located in the city of Vellore is a spot frequently visited by both locals and tourists. It is a park with state-of-the-art facilities for joggers, family picnics and other pastimes. This place is best known for its vibrant green matting all over and the different species of birds here.",
//     price: "500"
// })

// Data.insertMany([data1, data2, data3, data4, data5, data6, data7]);


app.get('/styles.css', (req, res) => {

    res.sendFile("D:\\abcdefghijklmnopqrstuvwxyz\\API_Programs\\styles.css");
  
  });


app.get('/script.js', (req, res) => {

    res.sendFile("D:\\abcdefghijklmnopqrstuvwxyz\\API_Programs\\script.js");
  
  });

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")})


app.post('/confirm', function(req, res) {
    var search = req.body.search;
    var html = ``
    Data.find({name: search}).then(function(data){
        console.log(data)
        html += `<div style="background-image: url(https://image.freepik.com/free-vector/doodle-travel-background_23-2148044879.jpg); background-repeat: repeat;">`;
            data.forEach((data) => {html +=`<div style="display: block; max-width: 900px; margin: auto; background-color: rgba(0, 0, 0, 0.5);  padding: 20px 100px;">
            <h1 style="color: #53fa15; text-align: center;background-color: rgba(0, 0, 0, 0.7)">${data.name}</h1>
            <img src="${data.img}" width="900px" style="display: block; margin-left: auto; margin-right: auto; max-width: 900px;"></img>
            <h3 style="color: #53fa15;text-align: center;background-color: rgba(0, 0, 0, 0.7)">${data.content}</h3>
            <h3 style="color: #53fa15;text-align: center;background-color: rgba(0, 0, 0, 0.7)">${data.price}</h3>
            </div>`
        }
        );
        html += `</div>`;
    })
    Data.find().then(function(data){
        html += `<div style="background-image: url(https://image.freepik.com/free-vector/doodle-travel-background_23-2148044879.jpg); background-repeat: repeat;">`;
        
        data.forEach((data) => {html +=`<div style="display: block; max-width: 900px; margin: auto; background-color: rgba(0, 0, 0, 0.5); padding: 20px 100px;">
            <h1 style="color: #53fa15; text-align: center; background-color: rgba(0, 0, 0, 0.7)">${data.name}</h1>
            <img src="${data.img}" width="900px" style="display: block; margin-left: auto; margin-right: auto;"></img>
            <h3 style="color: #53fa15;text-align: center;background-color: rgba(0, 0, 0, 0.7)">${data.content}</h3>
            <h3 style="color: #53fa15;text-align: center;background-color: rgba(0, 0, 0, 0.7)">${data.price}</h3>
            </div>`
    });
    html += `</div>`;
    console.log(html);
    res.send(html);
});
     
    
})


app.post('/contacted', function(req, res) {
    
    var email = req.body.email;
    var subject = req.body.subject;
    var fname = req.body.fname;
    var html = ``;
    html += `<script>alert("Your response has been recieved")</script>
    <div>
    <h2>Name: ${fname}</h2>
    <h2>Email: ${email}</h2>
    <h3>Message: ${subject}</h3>
    <a href="http://localhost:8000">Return to website</a>
    </div>`
    res.send(html);
})


app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html')
})


app.get('/about', function(req, res){
    res.sendFile(__dirname + '/about.html')
})

app.get('/discover', function(req, res){
    res.sendFile(__dirname + '/discover.html')
})


app.listen(8000, (err)=>{
    if (err){
        console.log(err);
    }
    else {
        console.log("Listening on port 8000");
    }
})



