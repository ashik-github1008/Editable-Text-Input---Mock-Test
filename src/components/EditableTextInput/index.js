import './index.css'
import {Component} from 'react'

class EditableTextInput extends Component {
  state = {isSaved: true, inputValue: ''}

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickSaveOrEdit = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {isSaved, inputValue} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1>Editable Text Input</h1>
          <div className="input-save-edit-container">
            {isSaved ? (
              <input
                type="text"
                value={inputValue}
                onChange={this.onChangeInputValue}
              />
            ) : (
              <p>{inputValue}</p>
            )}
            {isSaved ? (
              <button type="button" onClick={this.onClickSaveOrEdit}>
                Save
              </button>
            ) : (
              <button type="button" onClick={this.onClickSaveOrEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
