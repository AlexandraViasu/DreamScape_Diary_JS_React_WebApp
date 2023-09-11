import { deleteDream } from "./DreamService"
import './DreamJournal.css';

const DreamCard = ({dream, removeDream}) => {

    console.log(dream);
    const handleDelete = () => {
        deleteDream(dream._id).then(()=>{
            removeDream(dream._id);
        })
    }
    return (
        <>
            <div className="dreamjournal-container">
            <div>
            <h1 className='title-dreamjournal'>{dream.title}</h1>
            <p className='body-dreamjournal'>{dream.body}</p>
            <div className='tags-dreamjournal'>
            <ul class="nav">
                <li><b>Lucid Dream:</b> <span>{dream.isLucidDream ? '✅' : '❌'}</span></li>
                <li><b>Nightmare:</b> <span>{dream.isNightmare ? '✅' : '❌'}</span></li>
                <li><b>Recurring:</b> <span>{dream.isRecurring ? '✅' : '❌'}</span></li>
            </ul>
            </div>
            <p><b>Date:</b> {dream.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
            </div>
            </div>
        </>
    )
}

export default DreamCard;