import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>
{
    const cardArray = robots.map((user) =>
    {
        return (<Card 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            username={user.username} 
            email={user.email} />);
    });

    return (
        <div>
            { cardArray }
        </div>
    );
}

export default CardList;