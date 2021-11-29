
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { useState } from 'react';
import Article from "../components/Article";
import { store } from "../store";
import { useSelector } from "react-redux";
import { postArticle, getArticle } from "../store/actions/ActionsArticle"

const News = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("")
    const [error, setError] = useState(false);
    
    
    const listNews = useSelector(state => state.article.newsData)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length < 140) {
            setError(true);

        } else {
            store.dispatch(postArticle({
                name,
                text,
                date: Date.now(),
              }))
              store.dispatch(getArticle())
              setName("")
              setText("")

        }
    };

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h1>News</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={
                    (e) => setName(e.target.value)}
                    type="text" placeholder="Nom"
                    value={name} />
                {/* (e): evenement listener
     onChange : quand changement
     setAuthor : la const stoké plus haut 
     e.target.value : tu cible la valeur de la cible (target) */}
                <textarea
                    style={{border : error ? "1px solid red" : "1px solid #61dafb"}}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Message"
                    value={text}>
                    </textarea>
                    {error && <p>Veuillez écrire un minimum de 140 caractères</p>}

                <input type="submit" value="Envoyer" />
            </form>
            <ul>
            {(listNews.length > 0) && listNews
                .sort((a, b) => b.date - a.date)
                .map((article) => (
                    <Article key={article._id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default News;