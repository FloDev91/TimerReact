import React from 'react';
import Container from "./Container"
import proptype from "prop-types";

const renderContainer = (props) => {
        return props.timers.map((timer => {
            return ( <Container 
            key={timer.id} 
            {...timer} 
            onFormSubmit={props.onFormSubmit} 
            onDeleteTimer={props.onDeleteTimer}
            onPlay={props.onPlay}
            onPause={props.onPause} />
            )
        }))
    }
const ListContainer = (props) => {
        return (
            <div>
                <div className="list--container">
                    {renderContainer(props)}
                    
                </div>
            </div>
        )
}
    ListContainer.prototype = {
        timers: proptype.array.isRequered,
        onFormSubmit: proptype.func.isRequered,
        onDeleteTimer: proptype.func.isRequered,
        onPlay: proptype.func.isRequered,
        onPause: proptype.isRequered
    }

export default ListContainer 