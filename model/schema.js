const mongoose = require("mongoose")
const expenseschema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    amount:{
        type: Number,
        require: true,
    }
})
const Expense = mongoose.model("Expense",expenseschema)
module.exports = Expense;