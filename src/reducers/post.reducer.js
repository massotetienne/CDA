import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";

const initialState = {};
// initialState={} etatInitial = un objets vide.

export default function postReducer(state=initialState,
    action){
        switch (action.type){
            case GET_POSTS:
                return action.payload;
            case ADD_POST:
                return [action.payload, ...state]
            case EDIT_POST:
                return state.map((post)=>{
                    if (post.id === action.payload.id) {
                        return {
                            ...post,
                            content: action.payload.content,
                        }
                    } else return post;
                })
            case DELETE_POST:
                return state.filter((post)=> post.id !== action.payload.postId);

            default:
                return state;
        }
    }
// le reducer agit comme un filtre/middleware/routeur etc 
// le switch (action.type) tu prend le type dans action
// case: au cas ou c'est get_post alors retourne le payload de action
// idem pour le add post
// a default retourne state.