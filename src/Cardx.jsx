import React, { useState } from "react";
import Headers from "./components/Headers";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count"
import Footer from "./components/Footer"

function Cardx(props) {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevVlaue => {
      return [...prevVlaue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes(preValue => {
      return [...preValue.filter((note, index) =>
        index !== id)];
    })
  }



  return (
    <>
      <Headers />
      <Count count={notes.length === 0 ? "Empty" :
        `Showing ${notes.length} Notes in Database`} />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />

      ))}

      <Footer />

    </>
  );
}

export default Cardx;
