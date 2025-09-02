const express = require("express")
const app = express()
app.use(express.json())
require('./model/connection')
const Expense = require('./model/schema')
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 4444;

app.use(cors())

app.get("/get",async(req,res)=>{
    try {
        const expense = await Expense.find();
        res.json({message:"Expense retrieved successfully",expense})
    } catch (error) {
        res.json({message:"Error retrieving expense",error:error.message})
    }
})

app.post("/post",async(req,res)=>{
    try {
        const {title,amount} = req.body;
        const NewExpense = new Expense({
            title,
            amount
        })
        await NewExpense.save()
        res.json({message:"Expense inserted",expense:NewExpense})
    } catch (error) {
        res.json({message:"Error inserting expense",error:error.message})
    }
})

app.delete("/delete/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const deleted = await Expense.findByIdAndDelete(id);
        res.json({message:"Expense deleted successfully",deleted})
    } catch (error) {
        res.json({message:"Error in deleting expense",error:error.message})
    }
})


app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running on port ${PORT}`)
})