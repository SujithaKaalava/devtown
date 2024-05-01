const express=require('express');
const router = express.Router();
const {BooksModel,UserModel}=require('../models/index');
const { getAllUsers, createUser, getUserById, updateUserById, deleteUser } = require('../controllers/user-controller');

/**
 * Route: /users/:id
 * Method: PUT
 * Decsription: Updating a user by their id
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id',updateUserById)


/**
 * Route: /users
 * Method: GET
 * Decsription: Get all users
 * Access: Public
 * Paramaters: None
 */

router.get('/',getAllUsers)


/**
 * Route: /users/:id
 * Method: GET
 * Decsription: Get user by their ID
 * Access: Public
 * Paramaters: ID
 */

router.post('/',createUser)

//get user by id
router.get('/:id',getUserById)

//delete user by id
router.delete('/:id',deleteUser)
module.exports=router