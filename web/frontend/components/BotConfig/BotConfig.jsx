
import React, { useState } from 'react';
import './BotConfig.css'

const BotConfig = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    productInfo: '',
    chatVoice: '',
    color: '#000000', // Default color black
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="popup-filter">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Info */}
        <div>
          <label htmlFor="productInfo">Product Info:</label>
          <input
            type="text"
            id="productInfo"
            name="productInfo"
            value={formData.productInfo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Chat Voice */}
        <div>
          <label htmlFor="chatVoice">Chat Voice:</label>
          <input
            type="file"
            id="chatVoice"
            name="chatVoice"
            value={formData.chatVoice}
            onChange={handleChange}
            required
          />
        </div>

        {/* Color Picker */}
        <div>
          <label htmlFor="color">Select Color:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Displaying Form Data */}
      {/* <div>
        <h3>Form Data Preview:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default BotConfig;
