import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route,Link, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile';
import Logout from './logout';
import Product from './Product';


const routing=(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <Route exact path="/" component={App}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/product" component={Product}/>
      <Route path="/logout" component={Logout}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
// const root=document.getElementById('root');
// ReactDOM.createRoot(root).render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
