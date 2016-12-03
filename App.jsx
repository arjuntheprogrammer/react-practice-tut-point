import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <Link>Home</Link>
               <Link>About</Link>
               <Link>Contact</Link>
            </ul>
        
         </div>
      )
   }
}

export default App;