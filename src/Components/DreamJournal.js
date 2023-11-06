import React from 'react';
import DreamCard from './DreamCard';

const DreamJournal = ({ dreams, removeDream }) => {
    const dreamCards = dreams.map((dream) => {
        return <DreamCard dream={dream} removeDream={removeDream} />
    });

    return <>{dreamCards}</>;
}

export default DreamJournal;