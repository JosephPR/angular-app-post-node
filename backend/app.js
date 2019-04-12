const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose   = require('mongoose');

const postsRoutes = require ("./routes/posts");


const app = express();

mongoose.connect("mongodb://localhost/mean_course",{ useNewUrlParser: true })
.then(() => {
  console.log("Connected to database!!")
})
.catch(() => {
  consol.log("Connection Failed!")
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

// without requiring cors
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
// );
// res.setHeader('Access-Control-Allow-Methods',
// 'GET, POST, PATCH, DELETE, OPTIONS'
// );
  // next()
// });


app.use("/api/posts",postsRoutes);


module.exports = app;
