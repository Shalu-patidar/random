// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log(Math.ceil(Math.random() * 100))
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="para-1">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
