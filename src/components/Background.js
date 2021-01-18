import React from "react";
import background from "../utils/Assets/background-image.jpg"

function Background() {
    return (
        <div>
            <div className="video-container bg-image">
                <img className="w-100" src={background} />
            </div>
        </div>
    )
}

export default Background;