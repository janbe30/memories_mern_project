// Routes for posts
import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/posts.js"; // Node requires file extension

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
