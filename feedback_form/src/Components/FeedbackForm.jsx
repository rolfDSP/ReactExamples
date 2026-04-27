import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

   const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            Rate us:
          <input
          type="radio"
          onChange={handleChange}
          value="1"
          name="rating"/> 1
          <input
          type="radio"
          onChange={handleChange}
          value="2"
          name="rating"/> 2
          <input
          type="radio"
          onChange={handleChange}
          value="3"
          name="rating"/> 3
          <input
          type="radio"
          onChange={handleChange}
          value="4"
          name="rating"/> 4
          <input
          type="radio"
          onChange={handleChange}
          value="5"
          name="rating"/> 5
        </div>
        <button type="submit">Submit Feedback</button>

      </form>
    </>
  );
};

export default FeedbackForm;
