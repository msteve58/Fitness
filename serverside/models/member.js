const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const memberSchema = new mongoose.Schema({
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true},
    email: { type: String, required: true},
    bodyType: { type: String, required: true },
    gender: { type: String, required: true},
    fitnessGoal: {type: String, required: true}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Member', memberSchema,'members');
//note capital S in the collection name
