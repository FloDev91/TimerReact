import React, {Component} from 'react';
import '../helpers.js';

class Timer extends Component {
    componentDidMount()
    {
        this.myInterval = setInterval(() => {this.forceUpdate()},50)
    }
    handlePlay = (e) => {
        // e.preventDefault()
        this.props.onPlay(this.props.id)
    }
    handlePause = () => {
        this.props.onPause(this.props.id)
    }
    renderButton() {
        console.log(this.props.runningSince)

        if (this.props.runningSince !== 0) {
            console.log("004")

            return <button onClick={this.handlePause} className="button">Pause</button>
        }
        else {
            console.log("005")

            return <button onClick={this.handlePlay} className="button">Play</button>
        }
    }
    render() {
        const elapsedString = window.helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        return (
                <div className="timer--box">
                    <div className="timer--content">
                        <div className="timer--header">
                            <h2>{this.props.title}</h2>
                        </div>
                            <div className="timer--meta">
                                <p>{this.props.projet}</p>
                            </div>
                                <div className="timer--h2">
                                    <h4>{elapsedString}</h4>
                                </div>
                                    <div className="action">
                                        <span onClick={this.props.onEditFormOpen} className="edit">Edit</span>
                                        <span onClick={() =>{this.props.onDeleteTimer(this.props.id)}} className="trash">Supprimer</span>
                                    </div>
                                </div>
                                {this.renderButton()}
                            </div>
        )
    }
}

export default Timer 