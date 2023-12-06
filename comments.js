// Create web server

// Import express
const express = require("express");
const router = express.Router();

// Import comments controller
const commentsController = require("../controllers/commentsController");

// GET request for list of all comments
router.get("/", commentsController.comment_list);

// POST request for creating comment
router.post("/", commentsController.comment_create_post);

// GET request for one comment
router.get("/:id", commentsController.comment_detail);

// PUT request for updating comment
router.put("/:id", commentsController.comment_update_put);

// DELETE request for deleting comment
router.delete("/:id", commentsController.comment_delete);

module.exports = router;