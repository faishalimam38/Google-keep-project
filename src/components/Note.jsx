import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note({title , content, onDelete, id} ) {
    return (
        <>
            <div className = "note">
                <h1>{title}</h1>
                <p> {content} </p>
                <button onClick= {()=>onDelete(id)}> 
                <DeleteIcon />
                </button>
            </div>
        </>
    )
}
export default Note;