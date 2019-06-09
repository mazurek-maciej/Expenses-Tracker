const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
  firebaseId: String,
  wallets: [{
    name: String,
    value: String,
  }],
  finances: [{
    description: String,
    value: String,
    category: Object,
    financeType: Object,
    date: Date,
    walletId: String,
  }],
  categories: [{
    name: Object
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UsersSchema);
