import React, { useState } from 'react'

const GifCard = ({ id, embed_url, title, handleRemoveItem }) => {
    return (
        <div>
            <h3>{title}</h3>
            <iframe src={embed_url} width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <button onClick={() => handleRemoveItem(id)}>Remove</button>
        </div>
    )
}

export default GifCard
