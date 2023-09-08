import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Stats from "../Components/Stats";
import AddADream from "../Components/AddADream";
import DreamJournal from "../Components/DreamJournal";
import { getDream } from "../Components/DreamService";
import "./DreamJournalContainer.css";

    
const DreamJournalContainer = () => {

    const [dreams, setDreams] = useState([]);

  useEffect(() => {
    getDream().then((allDreams) => {
      setDreams(allDreams);
    })
  }, []);

  const addDream = (dream) => {
    setDreams([...dreams, dream]);
  }

  const removeDream = (id) => {
    const dreamsToKeep = dreams.filter(dream => dream._id !== id)
    setDreams(dreamsToKeep);
  }

return (

<Router>

<div className='parent'>
<header className='header'>
    <Link className='header' to="/home">Dreamscape Diary </Link>
    <Link className='header' to="/addadream">Add A New Dream </Link>
    <Link className='header' to="/dreamjournal">Dream Journal </Link>
    <Link className='header' to="/stats">Dream Statistics </Link>
</header>

<Routes>
    <Route path="/home" element={<Homepage />} />
    <Route path="/addadream" element={<AddADream addDream={addDream} />}  />
    <Route path="/dreamjournal" element={<DreamJournal dreams={dreams} removeDream={removeDream} />} />
    <Route path="/stats" element={<Stats dreams={dreams}/>}  />
    <Route path="/*" element={<ErrorPage />} />
</Routes>

<footer className='footer'>Made with 💜 by the Party Wizard's Fanclub</footer>
</div>

</Router>
  );
}

export default DreamJournalContainer;
