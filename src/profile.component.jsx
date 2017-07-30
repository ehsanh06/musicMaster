import React, { Component } from 'react';
import './assets/css/style.css';

class Profile extends Component {
    render() {
        let artist = {
            name: '',
            followers: {
                total: ''
            },
            images: [{ url: '' }],
            genres: []
        };

        // Setting artist, in the event that when artist isn't null
        artist = this.props.artist !== null ? this.props.artist : artist;

        return (
            <div className='profile-container'>
                <img
                    alt='Profile Image'
                    className='profile-img'
                    src={artist.images[0].url}
                />

                <div className='profile-info'>
                    <h2 className='profile-artist-name'>{artist.name}</h2>
                    <p className='profile-artist-followers'>{artist.followers.total} followers</p>
                    <p className='profile-artist-genres'>
                        {
                            artist.genres.map((genre, k) => {
                                genre = genre !== artist.genres[artist.genres.length - 1] ? ` ${genre},` : ` & ${genre}`;
                                return (
                                    <span key={k}>{genre}</span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        )
    }
}

export default Profile;