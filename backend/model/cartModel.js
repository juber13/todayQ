import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
  contentOfferingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContentOffering',
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String,
    required: true
  },

  transactionDate: {
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
