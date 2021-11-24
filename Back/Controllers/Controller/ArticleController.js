const dateFormat = require('dateformat');
const Article = require('../../DataBase/Models/Article');

exports.get = async (req, res) => {
  console.log('getArticle Fonctionne !')
  await Article.find({})
    .exec((err, data) => {
      res.json(data);
    });
}
exports.post = async (req, res) => {
  const dbArticle = await Article.find({})

  console.log('createArticle', req.body)
  console.log(req.file)

  Article.create({

      ...req.body,
      dateCreateDB: dateFormat(new Date(), "dd/mm/yyyy à HH:MM")
    },

    (err) => {
      if (err) console.log(err)
      res.json(dbArticle);
    })
  // res.send('sushi')
}


  // Method Get 

  // exports.deleteOne = async (req, res) => {
  //     const article = await Article.findById(req.params.id)

  //     console.log('ControllerDelete Article')
  //     console.log(article)
  //        article.deleteOne({
  //             // On va venir chercher parmis tout les _id celui égale à notre req.params (id recupéré dans l'URL)
  //             _id: req.params.id,
  //             // ici nous avons un callback err
  //         }, (err) => {
  //             // // Si nous avons pas d'erreur alors on redirige
  //             if (!err) return res.redirect('http://localhost:3000/news')
  //             // // Sinon on renvoit l'err
  //             else res.send(err)
  //         })
  //     }
