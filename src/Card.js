import React from 'react';

const Card = (robots) =>
{
    return (
        <div className="bg-light-green hover-bg-light-yellow dib br3 pa3 ma2 grow tc">
            <img alt='robot' src={`https://robohash.org/${robots.id + robots.email}?200x200`}/>
            <h2>{robots.name}</h2>
            <p>{robots.email}</p>
        </div>
    );
}

export default Card;