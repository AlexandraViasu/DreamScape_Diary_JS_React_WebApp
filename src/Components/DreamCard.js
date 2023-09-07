import { deleteDream } from "./DreamService"

const DreamCard = ({dream, removeDream}) => {

    console.log(dream);
    const handleDelete = () => {
        deleteDream(dream._id).then(()=>{
            removeDream(dream._id);
        })
    }
    return (
        <>
            <h1>{dream.title}</h1>
            <p>{dream.body}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default DreamCard;