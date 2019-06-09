const mongoose = require('mongoose');
const { Schema } = mongoose;

const FinancesSchema = new Schema({
  description: String,
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model("Finance", FinancesSchema);
