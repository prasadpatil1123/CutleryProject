import React, { useState, useEffect } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [eventPhotos, setEventPhotos] = useState(null);
  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);

  const FEEDBACK_KEY = 'submittedFeedbacks';
  const IMAGE_STORE_KEY = 'eventPhotos'; // For storing image data as base64

  useEffect(() => {
    // Load feedback from local storage
    const savedFeedback = localStorage.getItem(FEEDBACK_KEY);
    if (savedFeedback) {
      setSubmittedFeedbacks(JSON.parse(savedFeedback));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFeedback = { feedbackText: feedback, eventPhotos: eventPhotos };

    // Stringify feedback data
    const serializedFeedback = JSON.stringify(newFeedback);

    // Save feedback to local storage
    localStorage.setItem(FEEDBACK_KEY, serializedFeedback);

    // Store image data as base64 (optionally, explore browser storage API)
    if (eventPhotos) {
      localStorage.setItem(IMAGE_STORE_KEY, URL.createObjectURL(eventPhotos));
    }

    setFeedback('');
    setEventPhotos(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Feedback Form</h2>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={styles.textarea}
          />
        </div>
        <div>
          <label htmlFor="eventPhotos">Event Photos:</label>
          <input
            type="file"
            id="eventPhotos"
            onChange={(e) => setEventPhotos(e.target.files[0])}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
      {submittedFeedbacks.length > 0 && (
      <div style={styles.feedbackContainer}>
        <h2>Submitted Feedback (JSON Format)</h2>
        <pre>{submittedFeedbacks.join('\n')}</pre>
        <h2>Submitted Feedback (Readable Format)</h2>
        <ul>
          {submittedFeedbacks.map((feedbackItem, index) => (
            <li key={index}>
              <p>Feedback Text: {feedbackItem.feedbackText}</p>
              {feedbackItem.eventPhotos && (
                <img
                  src={localStorage.getItem(IMAGE_STORE_KEY)} // Retrieve image from local storage
                  alt="Event Photo"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
  );
}

const styles = {
  form: {
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "150px",
    border: "1px solid #ccc",
    padding: "10px",
  },
  submitButton: {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  },
  feedbackContainer: {
    margin: "20px 0",
  },
};

export default Feedback;
