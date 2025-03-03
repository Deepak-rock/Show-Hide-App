// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  firstNameBtn = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameBtn = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="content-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameBtn}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button className="button" type="button" onClick={this.lastNameBtn}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
