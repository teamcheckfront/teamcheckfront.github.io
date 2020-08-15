import React from 'react';
import '../Styling/Details.css';
import Figure from 'react-bootstrap/Figure';
import { MDBCol, MDBRow} from "mdbreact";

// meeting notes component
function Details() {
  return (
    <div>
      <br />
      <h3>Project Details</h3>
      <MDBRow center className="desc" >
        <MDBCol className="mcol" lg={8} md={10} sm={10}>
          Our team is excited to be working with Checkfront to develop a new importation
          system that is efficient and consistent amongst all client accounts. The system 
          is a web-based application that will be used internally by Checkfront staff. The 
          NCDI system benefits both customers (by an improved introductory experience)
          and Checkfront staff (by saving time and resources). 
        </MDBCol>
        
      </MDBRow>

      <MDBRow center className="desc">
        <MDBCol className="mcol" lg={8} md={10} sm={10}>
          The NCDI system validates, transforms, and integrates customer booking data into Checkfront’s 
          system automatically. The application maps client data to Checkfront’s corresponding items and adjusts
          when they are not identical. It also dynamically customizes the program for each client account.
        </MDBCol>
      </MDBRow>

      <Figure className="photo">
        <Figure.Image
          alt="CSV Upload Page"
          src="2details_importCSV.png"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 1. The NCDI CSV file import step.
        </Figure.Caption>
      </Figure>

      <MDBRow center className="desc">
        <MDBCol className="mcol" lg={8} md={10} sm={10}>
          To use the system, a staff member first logs into the client account. They then upload a CSV file. This step can be seen 
          above in Figure 1. Afterwards the user maps the CSV column names to the appropriate name used in Checkfront's database. They
          then map each unique item name in the CSV file to the item in Checkfront's system. This step can also be seen in Figure 2 below.
        </ MDBCol>
      </ MDBRow>

      <Figure className="photo">
        <Figure.Image
          alt="Header Mapping"
          src="3details_headermapping.png"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 2. The NCDI header mapping step.
        </Figure.Caption>
      </Figure>

      <MDBRow center className="desc">
        <MDBCol className="mcol" lg={8} md={10} sm={10}>
          Next the user will see a loading page while the program validates, transforms, and integrates the given data. Any data that 
          must be edited manually are written to a validation error file. Any data that cannot be pushed to Checkfront's API
          for unknown reasons get written to an import error file (Figure 3).
        </ MDBCol>
      </ MDBRow>

      <Figure className="photo">
        <Figure.Image
          alt="UI mockup for csv import"
          src="6details_importationerror.png"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 3. The NCDI importation error notification.
        </Figure.Caption>
      </Figure>
      <br/>
      <br/>

      <MDBRow center className="short-desc">
        <MDBCol className="mcol" lg={8} md={10} sm={10}>
          Once this process is complete, the user has the option to 
          log out, or import more data (Figure 4).  
        </ MDBCol>
      </MDBRow>

      <Figure className="photo">
        <Figure.Image
          alt="UI mockup for item mapping"
          src="7details_sucess.png"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 4. The NCDI succesful importation notification. 
        </Figure.Caption>
      </Figure>
      <br/>
      <br/>
      <p className="buzzword more-details"> <a href="https://teamcheckfront.github.io/#/demo">For more details click here to watch our demonstration video</a></p>
    </div>
  );
}

export default Details;