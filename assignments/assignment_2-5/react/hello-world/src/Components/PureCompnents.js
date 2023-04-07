import React, { Component } from 'react'

class PureCompnents extends Component {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureCompnents
