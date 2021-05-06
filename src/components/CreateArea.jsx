import { SettingsRemoteSharp } from "@material-ui/icons";
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';


function CreateArea({ submitButton, onAdd }) {
    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",

    });


    function handleChange(e) {
        const { name, value } = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })

    }

    function submitButton(event) {
        onAdd(note)
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }

    function handleExpanded() {
        setExpanded(true);
    }





    return (
        <>
            <div>
                <form>
                    {isExpanded && (
                        <input
                            value={note.title}
                            type="text"
                            placeholder="Title"
                            name="title"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    )}
                    <p>
                        <textarea
                            value={note.content}
                            onClick={handleExpanded}
                            name="content"
                            placeholder="Take a note..."
                            autoComplete="off"
                            onChange={handleChange}
                            rows = {isExpanded ? 3:1} >
                        </textarea>
                    </p>
                    <button onClick={submitButton}>
                        <AddIcon />
                    </button>
                </form>


            </div>
        </>
    )
}

export default CreateArea;