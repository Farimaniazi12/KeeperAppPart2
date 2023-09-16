import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"


function App() {
  return (
    <div>
      <Header />
      {notes.map(noteTeam  =>(
    <Note 
    key={noteTeam.key}
    title={noteTeam.title} 
    content={noteTeam.content}
    />
  ))}
      <Footer />
    </div>
  );
}

export default App;
