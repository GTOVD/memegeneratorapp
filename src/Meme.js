import React from 'react';
import memesData from './memeData.json';

export default function Meme () {
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "./ShutUpAndTakeMyMoney.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState({memesData})
    function handleClick(){
        const memesArray = allMemeImage.memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button className="form--button" onClick={handleClick}>Get a new meme image</button>
            </div>
            <div className="meme-div" >
             <img src={meme.randomImage} alt="Meme" className="meme--image" />
            </div>
        </main>
    )
}