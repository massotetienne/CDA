const
  express = require('express'),
  router = express.Router()

// Import Controller messages
const ArticleController = require ('./Controller/ArticleController')
router.route('/article/get')
    .get(ArticleController.getArticle)
router.route('/article')
    .post(ArticleController.postArticle)
router.route('/article/delete/:id')
    .get(ArticleController.deleteOne)
  




// Routes Article


module.exports = router