// routes/userRoutes.js
const express = require('express');
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.get("/Users", getAllUsers)
router.post("/Users", createUser)
router.put("/Users/:id", updateUser)
router.delete("/Users/:id", deleteUser)
module.exports = router;

