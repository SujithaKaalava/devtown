const express=require('express');
const router = express.Router();
let {books}=require('../data/books.json')

const {users}=require('../data/users.json')

const {BooksModel,UserModel}=require('../models/index');
const { getAllBooks,getBookById,getAllIssuedBooks,addNewBook,updateBookById} = require('../controllers/book-controller');


/**
 * Route: /books
 * Method: POST
 * Decsription: Create/Add a new book
 * Access: Public
 * Paramaters: None
 */

// router.post('/',(req,res)=>{
//     const {data}=req.body
    
//     if(!data){
//         res.status(404).json({
//             succuss:false,
//             message:"no data provided to add new book"
//         })
    
        
//     }
//     const book=books.find((each)=>each.id===data.id)
//     if(book){
//         res.status(404).json({
//             succuss:false,
//             message:"book already exist with this id///"
//         })
//     }
//     books.push(data)
//     res.status(200).json({
//         succuss:true,
//         message:"book created",
//         data:books
        

//     })
    
// })


router.post('/',addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Decsription: update book by its id
 * Access: Public
 * Paramaters: id
 */

// router.put('/:id', (req, res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const book = books.find((each)=> each.id === id);

//     if(!book)
//     return res.status(404).json({success: false, message: "book Does Not Exist"});



//     const updatedbook = books.map((each)=>{
//         if(each.id===id){
//             return {
//                 ...each,
//                 ...data,
//             }
//         }
//         return each;
//     })
//     books=updatedbook
//     return res.status(200).json({
//         success: true,
//         data: books
//     })
// })

router.put('/updateBook/:id',updateBookById);

/**
 * Route: /books/issuedBooks
 * Method: GET
 * Decsription: get all the issued books to user
 * Access: Public
 * Paramaters:
 */


// router.get('/issuedBooks/books',(req,res)=>{
//      const userWithIssuedBooks=users.filter((each)=>{
//         if(each.issuedBook){
//             return each
//         }
//      })
//      let issuedbooks=[]
//     userWithIssuedBooks.forEach((each)=>{
//         const book=books.find((book)=>book.id===each.issuedBook)
//         book.issuedTo=each.name
//         book.issuedDate=each.issuedDate
//         book.subscriptionDate=each.subscriptionDate
//         book.returnDate=each.returnDate
//         issuedbooks.push(book)
//     })
//     if(issuedbooks.length==0){
//         return res.status(404).json({
//             success:false,
//             message:"no issued books found"
//     })
//     //for unique values of issuedbooks
//     }issuedbooks=issuedbooks.filter((item,index)=>issuedbooks.indexOf(item)===index)
//     return res.status(200).json({
//         success:true,
//         data:issuedbooks
//     })
    
//})

router.get('/issuedBooks/by-user',getAllIssuedBooks)

/**
 * Route: /books
 * Method: GET
 * Decsription: Get all books
 * Access: Public
 * Paramaters: None
 */



// router.get('/',(req,res)=>{
//     res.status(200).json({
//         succuss:true,
//         data:books
//     })
// })

router.get('/',getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Decsription: Get  book by id
 * Access: Public
 * Paramaters: id
 */


// router.get('/:id',(req,res)=>{
//     const {id}=req.params
//     const book=books.find((each)=>each.id===id)
//     if(!book){
//         return res.status(404).json({
//             succuss:false,
//             message:"book not found ,./,./,."
//         })

//     }
//     return res.status(200).json({
//         succuss:true,
//         data:book
//     })

// })

router.get('/:id',getBookById);

module.exports=router

