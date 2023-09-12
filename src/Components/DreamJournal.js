import React from 'react';
import DreamCard from './DreamCard';

const DreamJournal = ({dreams, removeDream}) => {
    const dreamsList = dreams.map((dream) =>{
    return <DreamCard dream={dream} key={dream._id} removeDream={removeDream} />
    });

    return (
        <>
            {dreamsList}
        </>
    );
}

export default DreamJournal;