const express = require("express")

const postRoutes= require("./routes/posts.js")

const appRouter = express();

appRouter.use('/posts',postRoutes)


module.exports = appRouter;