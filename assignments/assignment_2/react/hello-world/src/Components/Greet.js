import React from 'react'

// JS6 arrow functions syntax
// const Greet = ({name, nickName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {nickName} 
//             </h1>
//             {props.children}
//         </div>
//     )
// }
const Greet = props => {
    const {name, nickName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {nickName} 
            </h1>
            {props.children}
        </div>
    )
}


export default Greet;
