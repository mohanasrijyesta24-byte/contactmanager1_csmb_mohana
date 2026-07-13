const mongoose = require("mongoose");
const dns = require("dns")
dns.setServer(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mohanasrijyesta24_db_user:mohana123@cluster0.ndiizo4.mongodb.net/mohana");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
