const
  express = require('express'),
  router = express.Router()

// Import Controller messages
const ArticleController = require ('./Controller/ArticleController')
router.route('/article/get')
    .get(ArticleController.get)
router.route('/article')
    .post(ArticleController.post)
// router.route('/message/delete/:id')
//     .get(messageController.deleteOne)
  




// Routes Article


module.exports = router