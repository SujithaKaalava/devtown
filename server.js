const express=require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv')

const DBconnection=require('./databaseConnection')


dotenv.config()

const usersRouter=require('./routers/user')
const booksrouter=require('./routers/books')
const port= 8081

app.use(express.json())
DBconnection()
app.use('/users',usersRouter)
app.use('/books',booksrouter)

app.get('/',(req,res)=>{
    console.log("server get created successsfully......")
})

app.get('*',(req,res)=>{
    res.status(404).json({
    message:"this rouer does not exist....."
    })
})

app.listen(port,()=>{
    console.log(`server created successfully at ${port}`)
})