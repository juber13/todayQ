import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  totalPrice : {
    type : String,
    required : true
  },

  transactionId : {
    type : String,
    required : true,
  },

  cardNumber: {
    type: String,
    required: true
  },

  cvv: {
    type: String,
    required: true
  },

  expiry_date: {
    type: String,
    required: true
  },


  createdAt: {
    type: Date,
    default: Date.now
  },

});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
