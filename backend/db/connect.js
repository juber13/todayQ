import mongoose from "mongoose";




const connectDB = async () => {
    console.log(process.env.PORT)
    try {

        mongoose.connect(process.env.DB_URL).then(() => {
            console.log("DB CONNECTED");
        }).catch(err => {
            console.log(err);
        })

    } catch (err) {
        console.log(`DB ERROR ${err}`)
    }
}


export default connectDB;