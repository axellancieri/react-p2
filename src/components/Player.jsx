import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        isEditing ? setIsEditing(false) : setIsEditing(true);
    };

    let isPlayerGaming = <span className="player-name">{name}</span>;

    if (isEditing) {
        isPlayerGaming = <input type='text' required/>;
    }

    return (
        <li>
            <span className="player">
                {isPlayerGaming}
                <span className="Player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
};