import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book.js'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookClass from './BookClass.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>GIRIDHAR</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiak94olEOrkSHnShhstxBdCK3Vvvjd_qz0Cj5segq5WZYz3HS" width="2000px" height="800px"/>
    <Book/>
   <BookClass/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
