const mongoose = require('mongoose');
const med = require('./med.module');

// creat collections in our DB using Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  medication: [med.MedicationListSchema]
});


const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserModel: UserModel
};