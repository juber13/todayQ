
import Transaction from "../model/cartModel.js";

const transactionDetail = async (req, res) => {
    try {

        const { name, cardNumber, cvv, expiry_date , totalPrice , transactionId } = req.body;

        if ([name, cardNumber, cvv, expiry_date].some(field => field?.trim() === "")) {
            return res.staus(400).json({ success: false, message: "All fields are rquired" });
        }

        const newTransaction = await Transaction.create({ name, cardNumber, cvv, expiry_date , totalPrice , transactionId});

        return res.status(200).json({
            success: true,
            message: "Transaction detail saved!",
            newTransaction
        })

    } catch (error) {
        console.log(error)
    }
}


export { transactionDetail }