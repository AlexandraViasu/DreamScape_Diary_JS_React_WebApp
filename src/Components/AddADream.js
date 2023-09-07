import React, { useState } from "react";
import { postDream } from "./DreamService"

const AddADream = ({ addDream }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    isLucidDream: false,
    isNightmare: false,
    isRecurring: false,
  });
  const onChange = (event) => {
    const newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    postDream(formData).then((data) => {
      addDream(data);
    });
    setFormData({
      title: "",
      body: "",
      isLucidDream: false,
      isNightmare: false,
      isRecurring: false,
    });
  };
  return (
    <form onSubmit={onSubmit} id="dream-form">
      <h2>Add a Dream</h2>
      <div className="formWrap">
        <label htmlFor="title">Title:</label>
        <input
          onChange={onChange}
          type="text"
          id="title"
          name="title"
          value={formData.title}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="body">Body:</label>
        <input
          onChange={onChange}
          type="text"
          id="body"
          name="body"
          value={formData.body}
        />
      </div>
      <div className="formWrap">
        <label>Lucid Dream:</label>
        <button
          type="button"
          onClick={() =>
            setFormData({ ...formData, isLucidDream: !formData.isLucidDream })
          }
        >
          {formData.isLucidDream ? 'ON' : 'OFF'}
        </button>
      </div>
      <div className="formWrap">
       
        <label>Nightmare:</label>
        <button
          type="button"
          onClick={() =>
            setFormData({ ...formData, isNightmare: !formData.isNightmare })
          }
        >
          {formData.isNightmare ? 'ON' : 'OFF'}
        </button>
      
      </div>
      <div className="formWrap">
        <label>Recurring:</label>
        <button
          type="button"
          onClick={() =>
            setFormData({ ...formData, isRecurring: !formData.isRecurring })
          }
        >
          {formData.isRecurring ? 'ON' : 'OFF'}
        </button>
      </div>
      <input type="submit" value="Save" id="save" />
    </form>
  );
};
export default AddADream;

// const AddADream = ({addDream}) => {
    
//   const [formData, setFormData] = useState({
//       title: "",
//       body: "",
//   })

//   const onChange = (event) =>{
//     const newFormData = Object.assign({}, formData);
//     newFormData[event.target.name] = event.target.value;
//     setFormData(newFormData);
//   }

//   const onSubmit = (event) =>{
//     event.preventDefault();
//     postDream(formData).then((data)=>{
//         addDream(data);
//     })
//     setFormData({
//         title: "",
//         body: "",
//     });
// }

// return (
//   <form onSubmit={onSubmit} id="dream-form" >
//       <h2>Add a Dream</h2>
//       <div className="formWrap">
//           <label htmlFor="title">Title:</label>
//           <input 
//               onChange={onChange} 
//               type="text" 
//               id="title" 
//               name="title"
//               value={formData.title} />
//       </div>
//       <div className="formWrap">
//           <label htmlFor="body">Body:</label>
//           <input 
//               onChange={onChange} 
//               type="text" 
//               id="body" 
//               name="body"
//               value={formData.body} />
//       </div>
//       <label>Lucid Dream:</label>
//         <button type="button" onClick={handleLucidDreamToggle}>
//           {isLucidDream ? 'ON' : 'OFF'}
//         </button>
//         <label>Nightmare:</label>
//         <button type="button" onClick={handleNightmareToggle}>
//           {isNightmare ? 'ON' : 'OFF'}
//         </button>
//         <label>Recurring:</label>
//         <button type="button" onClick={handleRecurringToggle}>
//           {isRecurring ? 'ON' : 'OFF'}
//         </button>
//       <input type="submit" value="Save" id="save"/>
// </form>

// );
// }

// export default AddADream;

// function App() {
//     const [dreams, setDreams] = useState([]);
//     const [newDreamTitle, setNewDreamTitle] = useState(""); 
//     const [newDreamBody, setNewDreamBody] = useState(""); 

//     const handleDreamTitleInput = function (event) {
//         const value = event.target.value;
//         setNewDreamTitle(value);
//     }

//     const handleDreamBodyInput = function (event) {
//         const value = event.target.value;
//         setNewDreamBody(value);
//     }

//     const dreamNodes = dreams.map(function (dream, index) {
//     return (
//     <li key={index}>
//         <span>Title: {dream.title} </span>
//         <br/>
//         <span>What you dreamed about: {dream.body}</span>
//     </li>
//     )})

//     const handleFormSubmit = function (event) {
//     event.preventDefault();
//     if (newDreamTitle.trim() !== "" && newDreamBody.trim() !== "") { 
//         const newDream = {
//             title: newDreamTitle,
//             body: newDreamBody
//         };
    
//         const copyDreams = [...dreams, newDream];
//         setDreams(copyDreams);
//         setNewDreamTitle("");
//         setNewDreamBody("");
//     }}


// return (

//     <>
    
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="new-dream-title">Title:</label>
//         <input
//           id="new-dream-title"
//           type="text"
//           value={newDreamTitle}
//           onChange={handleDreamTitleInput}
//         />

//         <label htmlFor="new-dream-body">Body:</label>
//         <input
//           id="new-dream-body"
//           type="text"
//           value={newDreamBody}
//           onChange={handleDreamBodyInput}
//         />

//         <input type="submit" value="Save new dream" />
//       </form>

     
      
//         <div>
//           <h2>Dreams:</h2>
//           <>{dreamNodes}</>
//         </div>
      
//     </>
// )
// }

// export default App;