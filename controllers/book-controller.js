// controller is the brain or logic of the route

const {BooksModel,UsersModel}=require('../models/index');
// const usersModel = require('../models/users-model');

const issuedBooks=require('../DTO/book-dto')

const  getAllBooks=async(req,res)=>{
    const books=await BooksModel.find();   //find() is a mongodb method to get data from database it ill take some time to fetch data so we are using async and await to go in a synchrounous way
    if(books.length===0){
        return res.status(404).json({
            success:false,
            message:"no book found"
        })
    }
    return res.status(200).json({
        success:true,
        data:books
    })


}


const getBookById=async(req,res)=>{
    const {id}=req.params
    const book=await BooksModel.findById(id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:`book no foud with this is ${id}`
        })
    }
    return res.status(200).json({
        success:true,
        data:book    
    })
    }
    


//get all issued books

getAllIssuedBooks=async(req,res)=>{
    const userWithIssuedBooks=await UsersModel.find({
        issuedbook:{$exists:true}
    }).populate("issuedbook")
    

    //data transfre object5 DTO   we are assigning or  information among our objects... using dot operator

                  //DTO(data tranfer object)
                  //    var obj1:{
                    //  name,
                    //  age,
                    //  gender,
                    //  id
                //   //}
                //   ||
                //   ||
                //   ||
                //   ||
                //   DTO
                //   ||
                //   ||
                  //    var obj2:{
                    //  name,
                    //  age,
                    //  gender,
                    //  id
                  //}
    const issuedBooks=userWithIssuedBooks.map((each)=>new issuedBooks(each))
    if(issuedBooks.length==0){
            return res.status(404).json({
                    success:false,
                    message:"no issued books found"
         })
            //for unique values of issuedbooks
    }issuedBooks=issuedBooks.filter((item,index)=>issuedBooks.indexOf(item)===index)
    return res.status(200).json({
                success:true,
                data:issuedBooks
    })
}



/**
 * Route: /books
 * Method: POST
 * Decsription: Create/Add a new book
 * Access: Public
 * Paramaters: None
 */

addNewBook=async(req,res)=>{
    
        const {data}=req.body
        
        if(!data){
            res.status(404).json({
                succuss:false,
                message:"no data provided to add new book"
            })
        
            
        }
        // const book=await BooksModel.find({})   bcz id is auto generated

        await BooksModel.create(data);
        const allBooks=await BooksModel.find()

        // const allBooks={...books,data};
        return res.status(201).json({
                        success:true,
                        data:allBooks
                })

        
    
}


//update book by id

updateBookById=async(req,res)=>{
    const {id}=req.params
    const {data}=req.body

    const updatedbook=await BooksModel.findOneAndUpdate({_id:id},data,{new:true})
    return res.status(200).json({
                success:true,
                data:updatedbook
    })
}


// const updateBookById = async (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;
  
//     // name="rk"
//     // updated ="kr"
//     const updatedBook = await BookModel.findOneAndUpdate(
//       {
//         _id: id,
//       },
//       data,
//       {
//         new: true,
//       }
//     );
//     return res.status(200).json({
//       success: true,
//       message: "Updated a Book By Their Id",
//       data: updatedBook,
//     });
//   };
module.exports={getAllBooks,getBookById,getAllIssuedBooks,addNewBook,updateBookById};
