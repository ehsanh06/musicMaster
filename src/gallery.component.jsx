import React, { Component } from 'react';
import './assets/css/style.css';

class Gallery extends Component {
    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        audio.play();
    }

    render() {
        const { tracks } = this.props;
        return (
            <div className='app-gallery'>
                {tracks.map((track, k) => {
                    const trackImg = track.album.images[0].url;
                    console.log('Track:', track);

                    return (
                        <div key={k} className='track' onClick={() => this.playAudio(track.preview_url)}>
                            <img src={trackImg} className='track-img' alt='Track Image' />
                            <p className='track-text'>
                                {track.name}
                            </p>
                        </div>
                    )

                })}
            </div>
        )
    }
}

export default Gallery;