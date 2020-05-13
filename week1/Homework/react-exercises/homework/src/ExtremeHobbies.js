import React from 'react';

export function HobbyList() {
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    return hobbies.map(hobby => <li>{hobby}</li>);
}

export function Hobbies() {

    return <ul><HobbyList /></ul>
}

