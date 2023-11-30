import React, { useState } from 'react';
import DreamCard from './DreamCard';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import './DreamJournal.css';

const DreamJournal = ({ dreams, removeDream, content, FILTER_MAP, filterList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  const tagMatch = (dream) => {
    const tagCheckFunction = FILTER_MAP[filter];
    if (!filter) {
      console.error("Filter is undefined");
      return false;
    }
    return filter === 'All' || (tagCheckFunction && tagCheckFunction(dream));
  };
  

  const filteredDreams = dreams
    .filter((dream) =>
      dream.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tagMatch);

  // const dreamCards = filteredDreams.map((dream) => (
  //   <DreamCard key={dream.id} dream={dream} removeDream={removeDream} searchTerm={searchTerm} />
  // ));

  const dreamCards = filteredDreams.map((dream, index) => (
    <DreamCard key={index} dream={dream} removeDream={removeDream} searchTerm={searchTerm} />
  ));

  if (!content) return null;

  const highlightText = (text, highlight) => {
    if (typeof text !== 'string') {
      return text;
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  console.log("All Dreams:", dreams);
  console.log("Current Filter:", filter);
  console.log("Filtered Dreams:", filteredDreams);

  return (
    <>
      <h1 className="dreamjournal-title">Your Dream Journal entries 📜</h1>
      <p
        className="dreamjournal-p"
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        Welcome to your personalized gateway to the world of dreams. Here, your
        subconscious thoughts come to life as you explore the rich tapestry of
        your dreamscape. Log in to discover a curated collection of your most
        vivid dreams, neatly organized and easily accessible. With our intuitive
        search bar, embark on a journey through the realms of your imagination.
        Whether you're seeking patterns, themes, or simply reliving the magic of
        a particular dream, this digital journal is your key to unlocking the
        mysteries of the night. Embrace the power of self-discovery as you
        navigate through the landscapes of your mind, one dream at a time."
      </p>

      
      <SearchBar term={searchTerm} onSearch={onSearch} />
      <div>
        <p>{highlightText(content.title, searchTerm)}</p>
      </div>
      <TagFilter filter={filter} setFilter={setFilter} />
      {dreamCards}
    </>
  );
};

export default DreamJournal;