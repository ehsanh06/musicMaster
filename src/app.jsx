import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './assets/css/style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    search() {
       console.log('this.state', this.state); 
    }

    render() {
        return (
            <div className='app'>
                <h1 className='app-title'>Music Master</h1>

                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type='text' 
                            placeholder='Search an Artist' 
                            value={this.state.query} 
                            onChange={event => {this.setState({query: event.target.value})}}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                } 
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
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