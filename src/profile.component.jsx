import React, { Component } from 'react';
import './assets/css/style.css';

class Profile extends Component {
    render() {
        let artist = {name: '', followers: {total: ''}};

        // Setting artist, in the event that when artist isn't null
        artist = this.props.artist !== null ? this.props.artist : artist;

        return (
            <div>
                <div>{artist.name}</div>
                <div>{artist.followers.total}</div>
            </div>
        )
    }
}

export default Profile;