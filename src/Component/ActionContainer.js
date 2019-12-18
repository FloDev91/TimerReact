import React, {Component} from 'react';
import Button from "./Button";
import TimerForm from "./TimerForm";
import propType from "prop-types"

class ActionContainer extends Component {
    static propType = {
        onFormSubmit: propType.func.isRequired
    }
    state = {
        isFormOpen: false
    }
    handleFormOpen = () => {
        this.setState({isFormOpen: true})
    }
    handleFormClose = () => {
        this.setState({isFormOpen: false})
    }
    onFormSubmit = ({title, projet}) => {
        this.handleFormClose()
        this.props.onFormSubmit({title, projet})
    }
    render() {
        return (
            <div>
               {this.state.isFormOpen ? 
               (<TimerForm 
                onFormSubmit={this.onFormSubmit} 
                onCloseForm={this.handleFormClose} />) 
               :
                (<Button handleFormOpen={this.handleFormOpen}/>) }
            </div>
        )
    }
}

export default ActionContainer 