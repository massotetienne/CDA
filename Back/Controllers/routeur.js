const
  express = require('express'),
  router = express.Router()

// Import Controller messages
const ArticleController = require ('./Controller/ArticleController')
const DeleteArticleController = require('./Controller/DeleteArticleController')
router.route('/article/get')
    .get(ArticleController.get)
router.route('/article')
    .post(ArticleController.post)
router.route('/article/delete/:id')
    .get(DeleteArticleController.deleteOne)
  




// Routes Article


module.exports = router