import './App.css';

import React, { Fragment, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "7d65f5e8fa8a4360a8bd122239d5c53c" //mishrasimmi99@gmail.com
  // const apiKey = "80c945b603f845afb1d5765af855248c"  //simmishra13@gmail.com
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <LoadingBar
        height={3}
        color='green'
        progress={progress} 
      />
        <Router>
          <Fragment>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country="in" category="general" />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="business" country="in" category="business" />} />
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country="in" category="general" />} />
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="health" country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" country="in" category="science" />} />
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" country="in" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="technology" country="in" category="technology" />} />
            </Routes>
          </Fragment>
        </Router>
      </div>
    )
 
}

export default App;