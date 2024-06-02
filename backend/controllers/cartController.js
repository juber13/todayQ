
import Transaction from "../model/cartModel.js";

const transactionDetail = async (req, res) => {
    try {

        const { transactionId, userName, price, contentName } = req.body;

        if ([transactionId, userName, price, contentName].some(field => field?.trim() === "")) {
            return res.staus(400).json({ success: false, message: "All fields are rquired" });
        }

        const newTransaction = await Transaction.create({ transactionId, userName, price, contentName });

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