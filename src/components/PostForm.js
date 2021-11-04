import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPosts} from "../actions/post.action";

const PostForm = () => {
  const [title , setTitle] = useState ('');
  const [content , setContent] = useState ('');
  const user = useSelector((state)=> state.userReducer);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    
    if (title && content){
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes:0,
      };
      dispatch(addPosts(data));
      setTitle("");
      setContent("");
    }
  }
// on construit la fonction handleForm qui va geré (e) pour événement
//e.preventDefault();pour veité le rechargement de la page.
//la fonction pour transmettre le titre et le content.
// on crée une const data ou l'on passe les paramétres de data a transmettre.
//une fois que les data sont gerer on dispatch via la fonction addPost du store
//setTitle,setContent ("")demande juste en fin de fonction de vidé les inputs.
// ci-dessus on injecte la fonction addPost du store
  return (
    <div className="form-container">
      <form onSubmit={(e)=> handleForm(e)}>
        <input type="text" 
        placeholder="Titre du poste" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}/>
        <textarea 
        placeholder="Postez vos pensées..."
        value={content}
        onChange={(e)=> setContent(e.target.value)}>
        </textarea>
        <input 
        type="submit" 
        value="Envoyer" />
      </form>
    </div>
  );
};
// ici le onSubmit gere l'action de submition
// onChange gere le changement de statut via (e) pour evenement 
// setTitle  a l'écoute de l'input title qui renvoie e(evenement)
// target (l'élément ciblé) value(la valeur)
export default PostForm;
