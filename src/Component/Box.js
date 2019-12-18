import React, { Component } from "react"
import ActionContainer from "./ActionContainer"
import ListContainer from "./ListContainer"
import uudid from "uuid"

class Box extends Component {
  state = {
    timers: [
      {
        title: "Apprendre React",
        projet: "tuto",
        id: "1",
        elapsed: 5609628,
        runningSince: 0
      },
      {
        title: "Rien faire",
        projet: "sleep",
        id: "2",
        elapsed: 1349620,
        runningSince: 0
      }
    ]
  }
  handleCreateTimer = ({ title, projet }) => {
    const timer = {
      title,
      projet,
      id: uudid.v4(),
      elapsed: 0,
      runningSince: 0
    }
    this.setState({
      timers: [...this.state.timers, timer]
    })
  }
  handleEditTimer = ({ id, title, projet }) => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            projet
          }
        } else {
          return { ...timer }
        }
      })
    })
  }
  handleDeleteTimer = id => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== id)
    })
  }
  handlePlay = id => {
    const now = Date.now()
    this.setState({
      timers: this.state.timers.map(timer => {
        console.log("001")

        if (id === timer.id) {
          return {
            ...timer,
            runningSince: now
          }
        } else {
          return { ...timer }
        }
      })
    })
  }

  handlePause = id => {
    const now = Date.now()
    this.setState({
      timers: this.state.timers.map(timer => {
        if (id === timer.id) {
          const nextElapse = now - timer.runningSince
          return {
            ...timer,
            runningSince: 0,
            elapsed: timer.elapsed + nextElapse
          }
        } else {
          return { ...timer }
        }
      })
    })
  }

  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view__box">
          <ListContainer
            timers={this.state.timers}
            onFormSubmit={this.handleEditTimer}
            onDeleteTimer={this.handleDeleteTimer}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
          />
          <ActionContainer onFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    )
  }
}

export default Box
