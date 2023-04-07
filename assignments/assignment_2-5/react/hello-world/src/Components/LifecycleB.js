import React, { Component } from 'react'

class LifcycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'David'
      }
      console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
  
    componentDidMount() {
        console.log('Lifecycle componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }


    render() {
    console.log('LifecycleB render')
    return <div>LifecycleB</div>
    }
}

export default LifcycleB
