import React, {Component} from 'react';

class button extends Component {
    render() {
        return (
                <button className="button__outline" onClick={this.props.handleFormOpen}> + </button>
        )
    }
}

export default button 