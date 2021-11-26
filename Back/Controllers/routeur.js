const
  express = require('express'),
  router = express.Router()

// Import Controller article
const ArticleController = require ('./Controller/ArticleController')
router.route('/article/get')
    .get(ArticleController.getArticle)
router.route('/article')
    .post(ArticleController.postArticle)
router.route('/article/delete/:id')
    .delete(ArticleController.deleteOne)
    // voir avec Morgahn pourquoi .delete ne focntionne pas et .get oui.
router.route('/article/update/:id')
    .put(ArticleController.editOne)
  




// Routes Article


module.exports = router