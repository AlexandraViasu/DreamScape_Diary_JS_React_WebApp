<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 668a96883209e6cdd817c23cd4c225838eda3ec7
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