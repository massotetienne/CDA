const dateFormat = require('dateformat');
const Article = require('../../DataBase/Models/Article');

//GET ARTICLE
exports.getArticle = async (req, res) => {
  console.log('getArticle Fonctionne !')
  await Article.find({})
    .exec((err, data) => {
      res.json(data);
    });
}

//POST ARTICLE
exports.postArticle = async (req, res) => {

  console.log('createArticle', req.body)
  console.log(req.file)

  Article.create({

      ...req.body,
      dateCreateDB: dateFormat(new Date(), "dd/mm/yyyy à HH:MM")
    }, async (err) => {
      if (err) console.log(err)
      const dbArticle = await Article.find({})
      res.json({ dbArticle });
    })
  // res.send('sushi')
}


// DELETE ARTICLE

exports.deleteOne = async (req, res) => {
  const article = await Article.findById(req.params.id)

  console.log('ControllerDelete Article')
  console.log(article)
  Article.deleteOne({
    // On va venir chercher parmis tout les _id celui égale à notre req.params (id recupéré dans l'URL)
    _id: req.params.id,
    // ici nous avons un callback err
  }, async (err) => {
    // // Si nous avons pas d'erreur alors on redirige
    if (err) console.log(err);
    // // Sinon on renvoit l'err
    // else 
    const dbArticle = await Article.find()
    console.log('res deleton article', dbArticle[0])
    res.json({ message: 'Article: ' + req.params.id + ' à bien été supprimer !', dbArticle })
  })
}

// UPDATE ARTICLE 
exports.editOne = (req, res) => {
  console.log("put", req.params, req.body);
  Article.findByIdAndUpdate(req.params.id, {
      ...req.body
    }, async (err, data) => {
      if (err) throw err;
      const dbArticle = await Article.find()
      res.json({
        message: "comment cree avec success !", dbArticle
      });
    }
  )
}