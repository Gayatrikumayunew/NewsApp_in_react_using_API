
import './App.css';

import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import News from './News';
import {
  BrowserRouter as Router,Routes,Route,
  Switch,
  
  Link,
  
}from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

const App =()=> {

  const pageSize=6;
  const apikey=process.env.REACT_APP_NEWS_API
  // apikey='3eae37356d1f45f787c945beba92f46f'
  // state={
  //   progress:0
  // }
const [progress,setProgress]=useState(0)

  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  
    return (
      <div>
          <Router>
      <Navbar />
      <LoadingBar 
      height={3}
      color='#f11946'
      progress={progress}
      // onLoaderFinished={()=>setProgress(0)}
      />
      <Routes>
        <Route exact path='/'         element={<News setProgress={setProgress} apikey={apikey}     key="general" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business"pageSize={pageSize} country="in" category="business" />} />
   <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path='/health' element=  {<News setProgress={setProgress} apikey={apikey}  key="health"pageSize={pageSize} country="in" category="health" />} />
        <Route exact path='/science' element= {<News setProgress={setProgress}apikey={apikey}   key="science"pageSize={pageSize} country="in" category="science" />} />
        <Route exact path='/sports' element=  {<News setProgress={setProgress} apikey={apikey}  key="sports"pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path='/technology'element={<News setProgress={setProgress}  apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </Router>

      </div>
    )
  }

export default App