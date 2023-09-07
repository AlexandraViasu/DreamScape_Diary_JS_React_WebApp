import React, {useState} from "react";



function App() {
    const [dreams, setDreams] = useState([]);
    const [newDreamTitle, setNewDreamTitle] = useState(""); 
    const [newDreamBody, setNewDreamBody] = useState(""); 

    const handleDreamTitleInput = function (event) {
        const value = event.target.value;
        setNewDreamTitle(value);
    }

    const handleDreamBodyInput = function (event) {
        const value = event.target.value;
        setNewDreamBody(value);
    }

    const dreamNodes = dreams.map(function (dream, index) {
    return (
    <li key={index}>
        <span>Title: {dream.title} </span>
        <br/>
        <span>What you dreamed about: {dream.body}</span>
    </li>
    )})

    const handleFormSubmit = function (event) {
    event.preventDefault();
    if (newDreamTitle.trim() !== "" && newDreamBody.trim() !== "") { 
        const newDream = {
            title: newDreamTitle,
            body: newDreamBody
        };
    
        const copyDreams = [...dreams, newDream];
        setDreams(copyDreams);
        setNewDreamTitle("");
        setNewDreamBody("");
    }}


return (

    <>
    
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new-dream-title">Title:</label>
        <input
          id="new-dream-title"
          type="text"
          value={newDreamTitle}
          onChange={handleDreamTitleInput}
        />

        <label htmlFor="new-dream-body">Body:</label>
        <input
          id="new-dream-body"
          type="text"
          value={newDreamBody}
          onChange={handleDreamBodyInput}
        />

        <input type="submit" value="Save new dream" />
      </form>

     
      
        <div>
          <h2>Dreams:</h2>
          <>{dreamNodes}</>
        </div>
      
    </>
)
}

export default App;