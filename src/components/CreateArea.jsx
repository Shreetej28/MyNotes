import React, { useState } from "react";

function CreateArea(props) {

  const [expand, setExapnd] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleExpand (){
    setExapnd(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      {}
      <form className="create-note">
        {expand ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null }
        
        <textarea
          name="content"
          onClick = {handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {expand ? 3:1}
        />
        {expand ? <button onClick={submitNote} style={{fontSize:"25px"}}>+</button>:null}
        
      </form>
    </div>
  );
}

export default CreateArea;
