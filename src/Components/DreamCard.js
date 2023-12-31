import React from "react";
import { deleteDream } from "./DreamService"
import './DreamJournal.css';

const DreamCard = ({ dream, removeDream }) => {

    console.log(dream);
    const handleDelete = () => {
        deleteDream(dream._id).then(() => {
            removeDream(dream._id);
        })
    }

    return (
        <>
            <div className="dreamjournal-container">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Pacifico&display=swap');
                </style>

                <div class="blog_post">
                    <div class="img_pod">
                        <img className="journal" src="/user_picture.jpg" alt="User Picture" />
                    </div>

                    <div class="container_copy">
                        <h3><b>Date:</b> {dream.date}</h3>
                        <h1 style={{ fontFamily: 'Caprasimo, cursive' }}>{dream.title}</h1>
                        <p style={{ fontFamily: 'Pacifico, cursive' }}>{dream.body}.</p>

                        {dream.hasAnimals ||
                            dream.hasHumans ||
                            dream.hasWorkPlace ||
                            dream.hasSchool ||
                            dream.hasFood ||
                            dream.hasHome ? (
                            <div className='tags-dreamjournal'>
                                {dream.hasAnimals && <li><span>#Animals</span></li>}
                                {dream.hasHumans && <li><span>#Humans</span></li>}
                                {dream.hasWorkPlace && <li><span>#BeingAtWork</span></li>}
                                {dream.hasSchool && <li><span>#BeingAtSchool</span></li>}
                                {dream.hasFood && <li><span>#Food</span></li>}
                                {dream.hasHome && <li><span>#BeingAtHome</span></li>}
                            </div>
                        ) : null}
                        <ul class="nav">
                            <li><b>Lucid Dream:</b> <span>{dream.isLucidDream ? '✅' : '❌'}</span></li>
                            <li><b>Nightmare:</b> <span>{dream.isNightmare ? '✅' : '❌'}</span></li>
                            <li><b>Recurring:</b> <span>{dream.isRecurring ? '✅' : '❌'}</span></li>

                        </ul>

                        <a class="btn_primary" onClick={handleDelete}> 🗑 </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DreamCard;