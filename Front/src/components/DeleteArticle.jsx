import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => {
    const handleDelete = () => {
        axios.deleteOne ('http://localhost:3004//article/delete/:id');
        window.location.reload();
    };

    return (
            <button 
            onClick = {() =>{
             if(window.confirm("Voulez vous supprimer cet article ?")) {
                 handleDelete();
             }
            }}
            >
            Supprimer
            </button>
    );
};

export default DeleteArticle;