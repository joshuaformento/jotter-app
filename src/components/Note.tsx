import DeleteIcon from "@mui/icons-material/Delete";

function Note(props: any) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon></DeleteIcon>
      </button>
    </div>
  );
}

export default Note;
