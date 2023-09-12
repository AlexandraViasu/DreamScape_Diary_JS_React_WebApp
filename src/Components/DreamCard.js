<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 668a96883209e6cdd817c23cd4c225838eda3ec7
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
            <p>Lucid Dream: {dream.isLucidDream ? 'yes' : 'no'}</p>
            <p>Nightmare: {dream.isNightmare ? 'yes' : 'no'}</p>
            <p>Recurring: {dream.isRecurring ? 'yes' : 'no'}</p>
            <p>Date: {dream.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <hr></hr>
        </>
    )
}

export default DreamCard;