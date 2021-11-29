import React, { useState } from 'react';
import { putArticle } from '../store/actions/ActionsArticle';
import DeleteArticle from './DeleteArticle';
import { store } from "../store";

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });


        return newDate;
    };
    
    
    const handleEdit = () => {
        console.log('put article', editContent, article)

        store.dispatch(putArticle(article._id, {
            text: editContent
        }))
        setIsEditing(false);
        // const data = {
        //     name: article.name,
        //     text: editContent ? editContent : article.text,
        //     date: article.date,
        // }
     
        // axios.put('http://localhost:3004/article/update/' + article._id, data)
        //     .then(() => {
        //         setIsEditing(false);
        //     })
    }

    return (
        <div className="article"
            style={{ background: isEditing ? "#f3feff" : 'white' }}>
            <div className="card-header">
                <h3>{article.name}</h3>
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea
                    onChange={(e) => setEditContent(e.target.value)}
                    autoFocus defaultValue={editContent ? editContent : article.text}></textarea>
            ) : (
                    <p>{editContent ? editContent : article.text}</p>
                )}
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                <DeleteArticle id={article._id}/>
            </div>
        </div>
    );
};

export default Article;