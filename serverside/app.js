const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const members = require('./models/member')

// connect and display the status 
mongoose.connect('mongodb+srv://msteve58:12qwaszx!@QWASZX@group2-wzjkk.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT, OPTIONS'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/members', (req, res, next) => {
   //call mongoose method find (MongoDB db.Students.find())
   members.find() 
   //if data is returned, send data as a response 
   .then(data => res.status(200).json(data))
   //if error, send internal server error
   .catch(err => {
   console.log('Error: ${err}');
   res.status(500).json(err);
 });
});
// serve incoming put requests to /students
app.put('/members/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    members.findOneAndUpdate({ _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          bodyType: req.body.bodyType,
          gender: req.body.gender,
          fitnessGoal: req.body.fitnessGoal
        }
      }, { new: true })
      .then((member) => {
        if (member) { //what was updated
          console.log(member);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }
});  
// serve incoming post requests to /students
app.post('/members', (req, res, next) => {
  const member = new members({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    bodyType: req.body.bodyType,
    gender: req.body.gender,
    fitnessGoal: req.body.fitnessGoal
  });
  //send the document to the database 
  member.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});

});

//to use this middleware in other parts of the application
module.exports=app;
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/members/:id", (req, res, next) => {
  members.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

