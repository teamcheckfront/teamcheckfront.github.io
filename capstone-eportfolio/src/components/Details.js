import React from 'react';
import '../Styling/Details.css';
import Figure from 'react-bootstrap/Figure';

// meeting notes component
function Details() {
  return (
    <div>
      <br />
      <h3>Project Details</h3>
      <p className="desc" >
        Our team is excited to be working with Checkfront to develop a new importation
        system that is efficient and consistent amongst all client accounts. The system 
        is a web-based application that will be used internally by Checkfront staff. The 
        NCDI system benefits both customers (by an improved introductory experience)
         and Checkfront staff (by saving time and resources). 
      </p>
      <img className=" detailsPic" src="placeholder.jpg" alt="Matchings? map? mapping?"></img>

      <p className="desc">
        The NCDI system validates, transforms, and integrates customer booking data into Checkfront’s 
        system automatically. The application maps client data to Checkfront’s corresponding items and adjusts
         when they are not identical. It also dynamically customizes the program for each client account.
      </p>
      <p className="desc">
        To use the system, a staff member first logs into the client account. They then upload a CSV file. This step can be seen 
        below in Figure 1. Afterwards the user maps the CSV column names to the appropriate name used in Checkfront's database. They
        then map each unique item name in the CSV file to the item in Checkfront's system. This step can also be seen in Figure 2 below.
        Next the user will see a loading page while the program validates, transforms, and integrates the given data. Any data that 
        must be edited manually are written to a validation error file. Any data that cannot be pushed to Checkfront's API
        for unknown reasons get written to an import error file. Once this process is complete, the user has the option to 
        log out, or import more data.  
      </p>
      <Figure className="photo">
        <Figure.Image
          alt="UI mockup for csv import"
          src="figma_import.jpeg"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 1. The UI mockup for a CSV file import.
        </Figure.Caption>
      </Figure>
      <Figure className="photo">
        <Figure.Image
          alt="UI mockup for item mapping"
          src="figma_item.jpeg"
          rounded
          fluid
        />
        <Figure.Caption>
          Figure 2. The UI mockup for the item mapping. 
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default Details;