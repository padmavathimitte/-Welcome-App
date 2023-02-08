// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  renderAuthButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      return <button type="button">Subscribed</button>
    }
    return <button type="button">Subscribe</button>
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <h1 className="mini-heading">Thank you! Happy Learning</h1>
        <Welcome />
        {this.renderAuthButton}
      </div>
    )
  }
}

export default Welcome
