import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import BlogPost from "./container/BlogPost/BlogPost";

ReactDOM.render(<BlogPost />, document.getElementById('content'));
reportWebVitals();
