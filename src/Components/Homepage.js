import React from 'react';
import './Homepage.css'; 

const Homepage = () => {

    
    
    return (
        <div className="homepage-container">
            <div id="gif-background">
                <img src="/background.gif" alt="Background GIF" />
            </div>
            <div className='text-homepage'>
            <h1 className='title-homepage'>Welcome to Dreamscape Diary!</h1>
            <p>
            Unlock the mysteries of your subconscious mind, one dream at a time.
            Dreamscape Diary is your gateway to the world of dreams, where imagination knows no bounds and the extraordinary becomes ordinary. Explore the ethereal landscapes of your mind, dive into the depths of your nocturnal adventures, and discover the hidden stories your dreams have been whispering to you.
            <br/>
            Our mission is to help you embark on a journey of self-discovery through the lens of your dreams. Whether you're an avid dreamer or just curious about the realms of the unconscious, you'll find a community of like-minded explorers and a treasure trove of resources to accompany you on your odyssey through the Dreamscapes.
            Join us today, and let your Dreamscape Diary be your guide to a world where reality and fantasy intertwine, where the ordinary transforms into the extraordinary, and where the mysteries of the night await your exploration.
            </p>
            </div>
        </div>
        )

}
export default Homepage;