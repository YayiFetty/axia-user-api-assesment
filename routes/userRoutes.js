const {Router} = require("express");
const router = Router();

const {createUser, getUser, updateUser, deleteUser} = require("../controllers/userController");

// Create a new user

router.post("/users", createUser);

// Get a user by ID

router.get("/users/:id", getUser);

// Update a user by ID

router.put("/users/:id", updateUser);

// Delete a user by ID

router.delete("/users/:id", deleteUser);

module.exports = router;