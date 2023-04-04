import React, { Component } from 'react'
import LifcycleB from './LifecycleB'

class LifcycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'David'
      }
      console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
  
    componentDidMount() {
        console.log('Lifecycle componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    render() {
    console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState} >Change state</button>
                <LifcycleB />
            </div>
        )
    }
}

export default LifcycleA
