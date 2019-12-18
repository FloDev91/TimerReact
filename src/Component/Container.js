import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";


class Container extends Component {
    state = {
        isFormOpen: false
    }
    handleEdtitFormOpen = () => {
        this.setState({isFormOpen: true})
    }
    handleEditFormClose = () => {
        this.setState({isFormOpen: false})
    }
    onFormSubmit = ({title, projet, id}) => {
        this.handleEditFormClose()
        this.props.onFormSubmit({title, projet, id})
    }
    render() {
        return (
                <div className="list--Container">
                    {this.state.isFormOpen ? 
                    ( <TimerForm 
                        title={this.props.title}
                        projet={this.props.projet} 
                        id={this.props.id}
                        onFormSubmit={this.onFormSubmit}
                        onFormClose={this.handleEditFormClose}  />) 
                    : (
                        <Timer 
                        title={this.props.title}
                        projet={this.props.projet} 
                        id={this.props.id} 
                        elapsed={this.props.elapsed}
                        runningSince={this.props.runningSince}
                        onEditFormOpen={this.handleEdtitFormOpen}
                        onDeleteTimer={this.props.onDeleteTimer}
                        onPlay= {this.props.onPlay}
                        onPause= {this.props.onPause}/>
                    ) }
                </div>
        )
    }
}

export default Container 