import React from "react";

function BackgroundVid({ src }) {
    return (
        <div className='hide-on-small'>
            <div className="video-container">
                <video autoPlay="autoplay" muted loop="loop" className="cover-video hide-on-small">
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className="overlay">
            </div>
        </div>
    )
}

export default BackgroundVid;