import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        //  isLoggedIn: true
         isLoggedIn: false
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome David!</div>

    // return (
    //     this.state.isLoggedIn ? (
    //     <div>Welcome David!</div>
    //     ) : (
    //     <div>Welcome Guest!</div>)
    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome David!</div>
    // } else {
    //     message = <div> Wellcome Guest!</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome David!
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>Welcome Guest!</div>
    //     )
    // }
    // return (
    //     <div>
    //     <div>Welcome David!</div>
    //     <div>Welcome Guest</div>
    //     </div>
    // )
    // }
    }
}

export default UserGreeting
