import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    submit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(response => this.props.submitted(response.data))
            .catch(error => console.log(error));
        this.setState({ username: '' });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" className="form-control" placeholder="Github username"
                        onChange={e => this.setState({ username: e.target.value })}
                        style={{ width: '30%', display: 'inline', marginRight: '5px', marginLeft: '5px', marginTop: '10px' }}
                        value={this.state.username} required />
                    <button type="submit" className="btn btn-info">Add</button>
                </form>
            </div>
        );
    }
}

export default Form;