import React, { Component } from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>, document.getElementById('root'));