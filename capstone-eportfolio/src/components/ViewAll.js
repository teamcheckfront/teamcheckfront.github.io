import React from 'react';
import {HashRouter} from 'react-router-dom';
import './PDF.css';
import './ViewAll.css';

// secure documents components
// should only be accessible if logged in
function ViewAll() {
  return (
    <div>
      <br></br>
      <HashRouter path="/sample.pdf" target="_blank" className="link" download style={{color:"#366fc9"}}>Download All Reports</HashRouter>
      <p className="space"> </p>
    </div>
  );
}

export default ViewAll;