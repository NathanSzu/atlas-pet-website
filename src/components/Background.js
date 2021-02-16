import React from "react";
import background from "../utils/Assets/background-image.jpg"

function Background() {
    return (
        <div className='hide-on-small'>
            <div className="video-container bg-image">
                <img className="image-backer" src={background} />
            </div>
        </div>
    )
}

export default Background;