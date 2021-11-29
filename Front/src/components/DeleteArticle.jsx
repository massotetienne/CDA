import React from 'react';
import { useDispatch } from 'react-redux';
import { delArticle } from '../store/actions/ActionsArticle';

const DeleteArticle = ({ id }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        // axios.delete ('http://localhost:3004/article/delete/' + id);
        console.log(id);
        // window.location.reload();
        dispatch(delArticle(id))
    };

    return (
        <button
            onClick={() => {
                if (window.confirm("Voulez vous supprimer cet article ?")) {
                    handleDelete();
                }
            }}
        > Supprimer </button>
    );
};

export default DeleteArticle;