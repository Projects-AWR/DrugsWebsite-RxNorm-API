const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_CONICTION, { useNewUrlParser: true, useUnifiedTopology: true });


const MedicationListSchema = mongoose.Schema({
  name: String,
  brandName: String,
  use: String,
  class: String,
  sideEffect: String
})


const medicationModel = mongoose.model('medication', MedicationListSchema)


module.exports = MedicationListSchema