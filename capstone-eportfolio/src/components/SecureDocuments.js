import React, { useState } from 'react';
import MeetingNotes from './MeetingNotes.js';
import RetrospectiveMeetings from './RetrospectiveMeetings.js';
import SprintBMR from './SprintBMR.js';
import WSR from './WSR.js';
import ScrumMeetings from './ScrumMeetings.js';
import ViewAll from './ViewAll.js';
import Login from './Login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SessionInfo from './SessionInfo.js';

// secure documents components
// should only be accessible if logged in
function SecureDocuments() {
  const [log, setLog] = useState(false);
  var isLoggedIn = SessionInfo.getLoggedIn();
  if(isLoggedIn){
    return (
      <div>
        <br></br>
        <h1>Secure Documents</h1>
        <Switch>
          <Route path="/securedocs/viewall" component={ViewAll}/>
          <Route path="/securedocs/meetingnotes" component={MeetingNotes}/>
          <Route path="/securedocs/retrospectivemeetings" component={RetrospectiveMeetings}/>
          <Route path="/securedocs/scrummeetings" component={ScrumMeetings}/>
          <Route path="/securedocs/sprintbmr" component={SprintBMR}/>
          <Route path="/securedocs/wsr" component={WSR}/>
        </Switch>
      </div>
    );
  } else {
    return <Login setLog={setLog} />
  } 
}

export default SecureDocuments;