import React from 'react';

export default function Meme () {
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "./ShutUpAndTakeMyMoney.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => { 
            return {
                ...prevMeme,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
    }
    React.useEffect(()=> { 
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data=> setAllMemes(data.data.memes))
    },[])
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        className="form--input"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        className="form--input"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                    <button className="form--button" onClick={handleClick}>Get a new meme image</button>
                </div>
            </form>
            <div className="meme-div" >
                <img src={meme.randomImage} alt="Meme" className="meme--image" />
                <h2 className="meme-topText text">{meme.topText}</h2>
                <h2 className="meme-bottomText text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}