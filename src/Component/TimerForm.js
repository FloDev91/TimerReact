import React, { Component } from "react"

class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    projet: this.props.projet || ""
  }
  handleProjetChange = e => {
    this.setState({ projet: e.target.value })
  }
  handleTitleChange = e => {
    this.setState({ title: e.target.value })
  }
  handleClick = () => {
    const { title, projet } = this.state
    if (this.props.id) {
        const id = this.props.id
        this.props.onFormSubmit({id, title, projet})
    } else {
      //this.props.onFormSubmit({title: this.state.title, projet: this.state.projet })
      this.props.onFormSubmit({ title, projet })
    }
  }
  render() {
    const submitText = this.props.title ? "Modifier" : "Créé"
    return (
      <div className="form">
        <div className="form--content">
          <div className="form--item">
            <label>Titre</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form--item">
            <label>Projet</label>
            <input
              type="text"
              value={this.state.projet}
              onChange={this.handleProjetChange}
            />
          </div>
        </div>
        <div className="form--button">
          <button className="button btn--submit" onClick={this.handleClick}>
            {submitText}
          </button>
          <button onClick={this.props.onCloseForm} className="button btn--cancel">Annuler</button>
        </div>
      </div>
    )
  }
}

export default TimerForm
