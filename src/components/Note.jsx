import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const deleteIcon ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Xq-OOOeFE3J1l-XS2cIJ1kQjt8WTCcY63H7LVWw&s"
  
  

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>{<img src = {deleteIcon} alt="delete" style={{width:"15px", height:"20px", color:"yellow"}} />}</button>
    </div>
  );
}

export default Note;
