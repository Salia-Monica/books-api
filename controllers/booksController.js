
const books = require("../books")


//get all books
const getBooks = (req, res)=>{
    res.status(200).json(books)
}


//delete a book
/*const deleteBook =(req, res)=>{
    const foundBook = await books.findByTitle(req.params.title)
    if (foundBook){
        foundBook.remove()
        res,json({msg:"book remove"})
    } else{
        res.status(404).json({error:"Book not found"})
    } 
} */

//delete a result
const deleteBook = (req, res)=>{
    res.json(books.filter((books)=> books.title!=req.params))
}

    









module.exports={getBooks, deleteBook}