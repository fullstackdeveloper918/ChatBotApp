
import React, { useState } from 'react';
import './ChatAssist.css'

const ChatAssist = () => {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send to server or log to console)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="question-page">
      <h1>Chat with us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is your name?</label>
          <input
            type="text"
            name="question1"
            value={formData.question1}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label>How can we assist you today?</label>
          <input
            type="text"
            name="question2"
            value={formData.question2}
            onChange={handleChange}
            placeholder="Describe your query"
          />
        </div>
        
        <div>
          <label>Where are you located?</label>
          <input
            type="text"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
            placeholder="Enter your location"
          />
        </div>
        
        <div>
          <label>What is your preferred contact method?</label>
          <input
            type="text"
            name="question4"
            value={formData.question4}
            onChange={handleChange}
            placeholder="Email, phone, etc."
          />
        </div>
        
        <div>
          <label>Anything else you'd like to share?</label>
          <textarea
            name="question5"
            value={formData.question5}
            onChange={handleChange}
            placeholder="Additional information"
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatAssist;
