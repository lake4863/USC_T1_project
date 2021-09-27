import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {FaTrashAlt,FaUndoAlt} from "react-icons/fa";
export const Moviecontrols = ({item, type})=>{
    const{removemovieFromlikedlist}=useContext(GlobalContext)
    const{removemovieFromblockedlist}=useContext(GlobalContext)
    return(
        <div>
            {type === "likedlist" &&(
            <>
             <button className="Delete" 
             onClick={()=>removemovieFromlikedlist(item.id)}>
                 <FaTrashAlt size="28px" />
             </button>
            </>
            )}
            {type === "blockedlist" &&(
            <>
             <button className="Delete" 
             onClick={()=>removemovieFromblockedlist(item.id)}>
                 <FaUndoAlt size="28px" />
             </button>
            </>
            )}
        </div>
    );
};