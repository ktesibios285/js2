import React, { Component } from 'react';

class Welcome extends Component {
    render () {
        const {name, nickName} = this.props
        // const {state1, state2} = this.state
        return (
            <h1>
                Class Component {name} a.k.a {nickName}
            </h1>
        )
    }
}

export default Welcome