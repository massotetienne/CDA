const mongoose = require ('mongoose')

const ArticleShema = new mongoose.Schema({
    
    name:String,
    text:String,
    createDate: {
        type:Date,
        default : new Date()
    },
    dateCreateDB: {
        type: String}
})

const Articles = mongoose.model('Article',ArticleShema)

module.exports = Articles