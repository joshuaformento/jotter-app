import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

type Note = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(newNote: any) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: any) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={addNote}></CreateArea>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          ></Note>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
