import React from 'react';
import Header from './Header.js'
import '../Styling/Home.css';

// home component
const Home = () => {
  return (
    <div>
      <Header />
      <p className="desc"> 
        Checkfront is a tenured supporter of Camosun College’s Capstone program and has presented another
         unique challenge for this year. Checkfront is a local, home-grown online booking management 
         solutions provider. It is a globally known company whose software is easy to use, highly secure,
          and fairly priced. The company’s primary goal is to enable clients to focus on products and 
          experiences rather than bookings.    
      </p>
      <div className="buzzword">
        <p> "One Booking Platform, Limitless Possibilities"</p>
      </div>
      <img className=" homePic" src="placeholder.jpg" alt="golbal? experiences?"></img>
      <p className="desc">  
        Acting on this initiative, our project sponsors, Robert McMynn
           and Stefanie Warren, created the NCDI project. At Checkfront, Robert is an implementation 
           specialist, and Stefanie is a customer success manager. The project sponsors along with 
           Checkfront developers, such as Jason Michael, have given this project and our team their full
            support.
      </p>
      <img className=" homePic" src="placeholder.jpg" alt="mismatched? importing? transfer? wrong?"></img>
      <p className="desc">
        Checkfront frequently works with new clients who need to transfer existing booking data into 
        Checkfront’s system. Often, this data is incompatible with Checkfront’s system and cannot go through
         the current data importation process. When this happens, staff have to manually insert all of the booking 
         data individually. If a client has hundreds of thousands of bookings, this is incredibly inefficient. In the
          past, a custom script was developed based on a specific incompatible data set. However, it was time-consuming 
          to develop and is not feasible to do for every client. 
      </p>
      <img className=" homePic" src="placeholder.jpg" alt="screenshot of the ncid login page?"></img>
      <div className="buzzword">
        <p>        "Upload
          <br></br>Validate
          <br></br>Transform
          <br></br>Integrate"
        </p>
      </div>
      <p className="desc">
        The aptly-named Team Checkfront, consisting of Samreeta (Sam), Roman, and 
         Natasha, has partnered with Checkfront to provide a New Customer Data Importation (NCDI) system as a 
         solution for this problem.
      </p>

    </div>
  )};

  export default Home;