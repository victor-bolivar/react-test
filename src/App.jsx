import React, { useState } from 'react'
import Search from './components/Search'
import getGifs from './helpers/getGifs'
import GifCard from './components/GifCard'

const App = () => {
    const [gifList, setGifList] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setGifList(await getGifs(e.target.search.value))
    }

    const handleRemoveItem = (id) => {
        const index = gifList.findIndex(item => item.id === id);
        const updatedGifList = [...gifList]
        updatedGifList.splice(index, 1)
        setGifList(updatedGifList)
    }

    return (
        <div>
            <h1>Look for a GIF</h1>

            <Search handleSubmit={handleSubmit} />

            {gifList.map(gif => <GifCard key={gif.id} {...gif} handleRemoveItem={handleRemoveItem} />)}
        </div>
    )
}

export default App
