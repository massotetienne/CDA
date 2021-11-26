
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Article from "../components/Article";

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("")
    const [error, setError] = useState(false);

    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = () => {
        axios.get('http://localhost:3004/article/get')
            .then((res) => setNewsData(res.data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length < 140) {
            setError(true);

        } else {


            axios.post('http://localhost:3004/article', {
                name,
                text,
                date: Date.now(),
                
            })
            .then(() => {
                setError(false)
                setName("");
                setText("");
                // getArticle();
            })
        }window.location.reload();
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
            <ul>{newsData
                .sort((a, b) => b.date - a.date)
                .map((article) => (
                    <Article key={article._id} article={article} />
                ))}
            </ul>
        </div>
    );
};

export default News;