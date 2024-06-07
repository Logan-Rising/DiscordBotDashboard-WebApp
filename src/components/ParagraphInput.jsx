import React, { useState } from 'react';
import { api_link } from '../config';

function ParagraphInput() {
  const [paragraph, setParagraph] = useState('');

  const handleChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleSubmit = async () => {
    const url = api_link + '/api/feedback';
    const request = new Request(url, {
      headers: new Headers({
        "Content-Type" : "application/json",
      }),
      body: JSON.stringify({
        description: paragraph,
      }),
      method: 'POST',
    });

    const response = await fetch(request);
    console.log(response)
    // Clear the input field after submission
    setParagraph('');
  };

  return (
    <div className="paragraph-container">
      <textarea
        className="paragraph-input"
        value={paragraph}
        onChange={handleChange}
        placeholder="Type your input here..."
      />
      <button className="styled-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ParagraphInput;
