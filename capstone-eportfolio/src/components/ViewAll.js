import React from 'react';
import '../Styling/PDF.css';
import '../Styling/ViewAll.css';

// secure documents components
// should only be accessible if logged in
function ViewAll() {
  return (
    <div>
      <br></br>
      <a href="/sample.pdf" target="_blank" className="link" download style={{color:"#366fc9"}}>Download All Reports</a>
      <p className="space"> </p>
    </div>
  );
}

export default ViewAll;