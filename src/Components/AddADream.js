import React, { useState } from "react";
import { postDream } from "./DreamService"
import DatePicker from "react-datepicker";
import './AddADream.css';

import "react-datepicker/dist/react-datepicker.css";

const AddADream = ({ addDream }) => {
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = startDate.toLocaleString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    isLucidDream: false,
    isNightmare: false,
    isRecurring: false,
    date: formattedDate
  });
  const onChange = (event) => {
    const newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    postDream(formData).then((data) => {
      addDream(data);
    });
    setFormData({
      title: "",
      body: "",
      isLucidDream: false,
      isNightmare: false,
      isRecurring: false,
      date: formattedDate
    });
  };
  return (
    <form onSubmit={onSubmit} className='addADream' id="dream-form">
      <h2>Add a Dream 💤</h2>
      <div className="formWrap">
        <label htmlFor="title">Title:</label>
        <input
          onChange={onChange}
          type="text"
          id="title"
          name="title"
          value={formData.title}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="body">Write as many details as you remember:</label>
        <input
          onChange={onChange}
          type="text"
          id="body"
          name="body"
          value={formData.body}
        />
      </div>
      <div className="formWrap">
        <label>Lucid Dream:</label>
        <button className="button-tags"
          type="button"
          onClick={() =>
            setFormData({ ...formData, isLucidDream: !formData.isLucidDream })
          }
        >
          <span>{formData.isLucidDream ? "✅" : '❌'}</span>
        </button>
      </div>
      <div className="formWrap">
       
        <label>Nightmare:</label>
        <button className="button-tags"
          type="button"
          onClick={() =>
            setFormData({ ...formData, isNightmare: !formData.isNightmare })
          }
        >
          <span>{formData.isNightmare ? '✅' : '❌'}</span>
        </button>
      
      </div>
      <div className="formWrap">
        <label>Recurring:</label>
        <button className="button-tags"
          type="button"
          onClick={() =>
            setFormData({ ...formData, isRecurring: !formData.isRecurring })
          }
        >
          <span>{formData.isRecurring ? '✅' : '❌'}</span>
        </button>
      </div>
      <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd MMMM yyyy h:mm a"
      showTimeInput/>
      <input type="submit" value="Save" id="save" />
    </form>
  );
};
export default AddADream;

