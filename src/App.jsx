import './App.css';
import Heading from "./components/Heading"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"



function App(props) {
  return (
    <div className="App">
      <Heading />
      {notes.map((noteItem) => <Note
      key ={noteItem.key}
      head = {noteItem.title}
      content = {noteItem.content}
    />
)}
      <Footer />
    </div>
  );
}

export default App;