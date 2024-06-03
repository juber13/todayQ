import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  amountdPaid : {
    type : Number,
    required : true
  },

  cardNumber: {
    type: Number,
    ref: 'User',
    required: true
  },

  cvv: {
    type: Number,
    required: true
  },

  expiry_date: {
    type: String,
    required: true
  },

  transactionDate: {
    type: Date,
    required: true
  },



  createdAt: {
    type: Date,
    default: Date.now
  },

});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
