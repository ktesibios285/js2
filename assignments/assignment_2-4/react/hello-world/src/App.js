import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form'
import LifcycleA from './Components/LifcycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Blogs from './Components/Blogs';
import Contact from "./Components/Contact";

// Class Exercise 
function App() {
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="blogs" element={<Blogs />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

// Excersize 24-25 Updating Lifecycle Methods & Fragments
// class App extends Component {
//   render () {
//     return (
//       <div className= "App">
//         <Table />
//         {/* <FragmentDemo /> */}
//       </div>
//     )
//   }
// }

// Excersize 22-23 Mounting Lifcycle Methods
// class App extends Component {
//   render () {
//     return (
//       <div className= "App">
//         <LifcycleA />
//       </div>
//     )
//   }
// }

// Exercise 21 - Formhandling 
// class App extends Component {
//   render () {
//     return (
//       <div className= "App">
//         <Form />
//       </div>
//     )
//   }
// }
  
// Exercises 1-20
// function App() {
//   return (
//     <div className="App">

//       {/* <h1 className='error'>Error</h1>
//       <h1 className={styles.success}>Success</h1> */}
//       {/* <Inline /> */}
//       {/* <Stylesheet primary={true} /> */}
//       {/* <NameList /> */}
//       {/* <UserGreeting /> */}
//       {/* <ParentComponent /> */}
//       {/* <EventBind /> */}
//       {/* <FunctionClick /> */}
//       {/* <ClassClick /> */}
//       {/* <Counter /> */}
//       {/* <Message /> */}
//       {/* <Greet name="Robert" nickName="Squid">
//         <p>This is children props</p>
//       </Greet>
//       <Greet name="Dan" nickName="Swabbie">
//         <button>Action</button>
//       </Greet>
//       <Greet name="Tina" nickName="Bubblehead" /> */}
//       {/* <Welcome name="Robert" nickName="Squid" /> */}
//       {/* <Welcome name="Dan" nickName="Swabbie" /> */}
//       {/* <Welcome name="Tina" nickName="Bubblehead" /> */}
//       {/* <Hello /> */}
//       </div>
//   );
// }

export default App;
