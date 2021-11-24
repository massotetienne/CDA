const dateFormat = require('dateformat');
const Article = require('../../DataBase/Models/Article');

exports.deleteOne = async (req, res) => {
    const article = await Article.findById(req.params.id)

    console.log('ControllerDelete Article')
    console.log(article)
       Article.deleteOne({
            // On va venir chercher parmis tout les _id celui égale à notre req.params (id recupéré dans l'URL)
            _id: req.params.id,
            // ici nous avons un callback err
        }, (err) => {
            // // Si nous avons pas d'erreur alors on redirige
            if (!err) return res.redirect('http://localhost:3000/news')
            // // Sinon on renvoit l'err
            else res.send(err)
        })
    }