import { Link } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Stats from "../Components/Stats";
import AddADream from "../Components/AddADream";
import DreamJournal from "../Components/DreamJournal";


    
    
const DreamJournalContainer = () => {

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
    <Route path="/addadream" element={<AddADream />}  />
    <Route path="/dreamjournal" element={<DreamJournal />} />
    <Route path="/stats" element={<Stats />}  />
    <Route path="/*" element={<ErrorPage />} />
</Routes>

<footer className='footer'>Made with 💜 by the Party Wizard's Fanclub</footer>
</div>

</Router>
)
}

export default DreamJournalContainer;
