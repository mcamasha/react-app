import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <div>Hello, {this.props.name}!</div>
        );
    }
}

ReactDOM.render(
    <Hello name='Maria'/>,
    document.getElementById('root')
);