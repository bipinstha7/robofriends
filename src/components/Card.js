import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className="bg-light-green dib ma2 pa3 br3 grow shadow-5 ">
      <img src={`https://robohash.org/${id}?size=200x150`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;