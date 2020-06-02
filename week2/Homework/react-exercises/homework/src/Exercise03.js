import React, { useState, useEffect } from 'react'

let ENDPOINT = 'https://official-joke-api.appspot.com/random_joke'

function RandomJoke() {
    const [joke, setJoke] = useState({})
    let jokeStyle = {
        fontSize: '30px',
        fontWeight: '700',
        fontFamily: 'Segoe UI',
        border: '2px solid black',
        display: 'inline-block',
        padding: 20,
        borderRadius: 15
    }

    useEffect(() => {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => setJoke(data))
    }, [])



    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Joke joke={joke} style={jokeStyle} />
        </div>
    )
}
function Joke(props) {
    return (<div style={props.style}>
        <p>-{props.joke.setup}</p>
        <p>-{props.joke.punchline}</p>
    </div>)
}

export default RandomJoke;
