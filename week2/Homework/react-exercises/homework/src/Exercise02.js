import React, { useState } from 'react'

//The original api endpoint was down when the project was made
let ENDPOINT = 'https://api.thecatapi.com/v1/images/search'

function CatGallery() {

    const [catPhotos, setCatPhotos] = useState([])

    function getCatPhoto() {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => setCatPhotos(prevState => [...prevState, data[0]]))
    }

    return (
        <div>
            {catPhotos.length === 0 ? <h1>Get your first cat by clicking the button!</h1> : catPhotos.map(item => {
                return <CatPhoto key={item.id} source={item.url} />
            })}
            <Button handleClick={getCatPhoto} />
        </div>
    )
}

function CatPhoto(props) {
    return (
        <div>
            <img src={props.source} style={{ objectFit: 'cover', width: 500, height: 500 }} />
        </div>
    )
}

function Button(props) {

    let buttStyle = {
        position: 'absolute',
        top: 100,
        right: 600,
        borderRadius: '50%',
        border: 'none',
        padding: 20,
        width: 100,
        height: 100,
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'coral'
    }

    return <button style={buttStyle} onClick={props.handleClick}>Get a cat</button>
}


export default CatGallery;
