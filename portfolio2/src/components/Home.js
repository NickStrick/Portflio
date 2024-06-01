import React, { useState } from 'react';

import SplitLine from '../images/svg/pageSplit.js'
import SplitTwo from '../images/splitters/bottom-wave-2.js'
import SplitThree from '../images/splitters/bottom-wave-3.js'

const Home = () => (
    <div className="content-container">
        <div className="section-container">
            <div className="section-content">
                <h2>Home</h2>
                <p>Welcome to the Home page!</p>
            </div>
        </div>
        <SplitLine fillColor={'#98FF98'} />
        <div className="page-split-padding-light"></div>
        <div className="section-container section-container-white">
            <div className="section-content">
                <h2>Home</h2>
                <p>Welcome to the Home page!</p>
            </div>
        </div>
        <SplitTwo fillColor={'#98FF98'} />
        <div className="page-split-padding-dark split-wave-2"></div>
        <div className="section-container ">
            <div className="section-content">
                <h2>Home</h2>
                <p>Welcome to the Home page!</p>
            </div>
        </div>
        <SplitThree fillColor={'#98FF98'} />
        <div className="page-split-padding-dark split-wave-3"></div>
    </div>
  );
  export default Home;