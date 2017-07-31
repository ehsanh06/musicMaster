import React, { Component } from 'react';
import './assets/css/style.css';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);

        // If audio is not playing
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {

            // If audio is playing
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            } else {

                // If audio is paused
                this.state.audio.pause();
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }

    render() {
        const { tracks } = this.props;
        return (
            <div className='app-gallery'>
                {
                    tracks.map((track, k) => {
                        const trackImg = track.album.images[0].url;
                        console.log('Track:', track);

                        return (
                            <div key={k} className='track' onClick={() => this.playAudio(track.preview_url)}>
                                <img src={trackImg} className='track-img' alt='Track Image' />

                                <div className="track-play">
                                    <div className="track-play-inner">
                                        {
                                            this.state.playingUrl === track.preview_url
                                            ? <span>&#10074;&#10074;</span>  /* Pause */
                                            : <span>&#9654;</span>  /* Play */
                                        }
                                    </div>
                                </div>
                                <p className='track-text'>
                                    {track.name}
                                </p>
                            </div>
                        )

                    })
                }
            </div>
        )
    }
}

export default Gallery;