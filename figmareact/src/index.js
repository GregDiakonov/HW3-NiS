import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/Typography.css';
import './css/Buttons.css';
import './css/Grids.css';
import './css/Textbox.css';

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Steps from "./Steps";
import Projects from "./Projects";
import Testimonials from "./testimonials"
import Form from "./Form"
import Footer from "./Footer"

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header phone="+7 999 999 99 99" />
    <Hero />
    <About />
    <Steps />
    <Projects />
    <Testimonials />
    <Form />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
