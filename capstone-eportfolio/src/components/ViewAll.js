import React from 'react';
import {Link} from 'react-router-dom';
import './PDF.css';
import './ViewAll.css';

// secure documents components
// should only be accessible if logged in
function ViewAll() {
  return (
    <div>
      <br></br>
      <Link to="/sample.pdf" target="_blank" className="link" download style={{color:"#366fc9"}}>Download All Reports</Link>
      <p className="space"> </p>
    </div>
  );
}

export default ViewAll;