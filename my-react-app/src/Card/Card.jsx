import React from 'react';

const Card = ({ name, image, quotes }) => {
  return (
    <div className="card">
      <div className="image-container-character">
        <img src={image} alt="Character" />
      </div>
      <div className="text-container-character">
          <h2>Character:</h2>
          <p>{name}</p>
          <h2>Quote:</h2>
          {quotes.map((quote, index) => (
            <p key={index} className="quote">{quote}</p>
          ))}
       </div>
    </div>
  );
};

export default Card;