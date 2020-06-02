import React, { useState } from 'react';

function Friend() {
    const [friend, setFriend] = useState({})
    const [loading, setLoading] = useState(false)

    let style = {
        textAlign: 'center',
        fontFamily: 'Segoe UI'
    }


    function getFriend() {
        fetch('https://www.randomuser.me/api?results=1')
            .then(res => res.json())
            .then(data => {
                const { name: { first, last }, location: { country, street: { number, name } }, email, phone } = data.results[0]
                setFriend({ first: first, last: last, country: country, stNumber: number, stName: name, email: email, phone: phone })

            })
    }
    return (<div style={style}>
        <h1>Want a friend?</h1>
        <FriendProfile friend={friend} />
        <Button handleClick={getFriend} />
    </div>)
}

function FriendProfile(props) {

    return (<ul style={{ listStyle: 'none' }}>
        <li>First Name: {props.friend.first}</li>
        <li>Last Name: {props.friend.last}</li>
        <li>Address: {props.friend.stNumber}, {props.friend.stName} street</li>
        <li>Country: {props.friend.country}</li>
        <li>Email: {props.friend.email}</li>
        <li>Telephone: {props.friend.phone}</li>
    </ul>)
}

function Button(props) {
    return <button onClick={props.handleClick}>Get a friend!</button>
}

export default Friend;