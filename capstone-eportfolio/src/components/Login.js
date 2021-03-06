import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../Styling/Login.css";
import SessionInfo from './SessionInfo.js';

export default function Login({setLog}) {
  const [password, setPassword] = useState("");
  const [errors, setErrrors] = useState([]);
  //the passwrd the user needs to get right
  const correctPW = "SRNics2020";

  // the login button is disabled until there are at least 3 
  // chars typed into the password field
  function validateForm() {
    return password.length > 2;
  }

  // once the form is sumbitted
  // prevent a page refresh
  // check if the pw is correct (concole.log a response)
  function handleSubmit(event) {
    event.preventDefault();
    if(password === correctPW) {
      console.log("password right");
      // setLog is required to force a re-render of the 'secure docs component'
      setLog(true);
      SessionInfo.setLoggedIn(true);
      // need to set up some kind of cookie so that you don't have to 
      // re-log in everytime you go back to this page
    } else {
      console.log("password wrong");
      // i would like an error message to show up to the user 
      setErrrors(["Password Incorrect"]);
    }
  }

  // the form it returns
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="password" >
          <FormLabel>Password</FormLabel>
          <FormControl
            autoFocus
            value={password}
            // every time the field changes update the password variable
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        
        <Button block variant="info" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <div style={{color:"#FF5F76", marginTop: "15px"}}>{errors[0]} </div>
        <br/> <br/>
      </form>
    </div>
  );
}