import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './assets/css/style.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1 className='app-title'>Music Master</h1>

                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' placeholder='Search an Artist' />
                        <InputGroup.Addon>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                    
                </FormGroup>

                <div className='app-profile'>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className='app-gallery'>
                    Gallery
                </div>
            </div>
        );
    }
}
export default App;