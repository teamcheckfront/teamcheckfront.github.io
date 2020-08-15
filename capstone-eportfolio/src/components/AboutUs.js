import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Image from "react-bootstrap/Image";
import LinkedIn from "react-feather/dist/icons/linkedin";
import Mail from "react-feather/dist/icons/mail";
import Tooltip from '@material-ui/core/Tooltip';
import '../Styling/AboutUs.css';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";

class AboutUs extends Component {

  // -- STYLE FUNCTIONS --
  // style for the container
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "90vh",
      width: "100%",
      display: "block",
      justifyContent: "center",
      alignItems: "middle"
      
    };
  }
  // style for container on mobile/tablets
  static get BLOCK_STYLE() {
    return {
      margin: "0 auto",
      height: "auto",
      width: "100%",
      display: "block",
      justifyContent: "center",
      alignItems: "middle"
    }
  }

  // Style for the card
  static get CARD_STYLE() {
    return {
      height: "auto",
      width: "500px",
      paddingTop: "500px",
      padding: "10px",
      textAlign: "center",
      background: "#254d8c",
      color: "#FFF",
      fontSize: "15px",
      borderRadius: "8px",
      boxSizing: "border-box",
      margin: "auto",
      display: "block"
    };
  }
  // style for card on mobile or tablet
  static get BLOCK_CARD_STYLE() {
      return {
        height: "auto",
        width: "500px",
        paddingTop: "30px",
        padding: "10px",
        textAlign: "center",
        background: "#254d8c",
        color: "#FFF",
        fontSize: "13px",
        borderRadius: "8px",
        boxSizing: "border-box",
        margin: "0 auto 20px auto",
        display: "block"
      }
  }

  // -- CLASS FUNCTIONS --
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  // gets called once, when the component first mounts 
  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  // gets called once, when the component is about to unmount
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    if(isDesktop) {
      // if it's a desktop render the carousel
      return (
        <div >
          <br />
          <h3> Our Team</h3>
          <MDBRow center className="desc about-us">
            <MDBCol  lg={8} md={10} sm={10}>
              <p >
                The team members have contributed equally to the success of this project. All members have the role of a 
                full-stack developer. However, each individual does have a unique role within the group. Sam acts as the 
                project manager. She keeps the group on task and organized. Natasha acts as the liaison between the project sponsors
                and team. Roman brings his experience working in teams to facilitate team and faculty communication.
              </p>
            </MDBCol>
          </MDBRow>
          <div style={AboutUs.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={false} autoplay_speed={12000}>
              <div style={AboutUs.CARD_STYLE}>
                <Image className="photo" src="samreeta.jpeg" alt="Samreeta" height="300px" rounded/>
                <h3>Samreeta Kandola</h3>
                <p className="card-text">
                  Sam followed her passion for the outdoors and sciences to Victoria where she earned a Bachelor’s
                  degree in Biopsychology from UVic. While working in sales and as a Canadian Certified Optometric
                  Assistant, she developed an interest in project management. Exploring this path led Sam to discover the
                   field of computer science. Since then, she has been pursuing her passion for programming. Combining her 
                   soft and technical skills, Sam looks forward to becoming an indispensable software developer and eventually
                    a project manager.
                </p>
                <a className="icon" href="https://www.linkedin.com/in/samreeta-kandola/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                <Tooltip title="sakandola@hotmail.com" interactive>
                  <a className="icon" href="mailto:sakandola@hotmail.com" ><Mail /></a>
                </Tooltip>
                <br/>
                <br/>
              </div>
              <div style={AboutUs.CARD_STYLE}>
                <Image className="photo" src="natasha.jpeg" alt="Natasha" height="300px" rounded/>
                <h3>Natasha Bains</h3>
                <p className="card-text">
                  Natasha has always valued a strong commitment to implementing quality code and adapting to any given situation.
                  Her biggest strength is her ability to analyze problems from multiple perspectives. Her experience in customer
                  service, and coming from a large family has established a deep understanding of communication. This has
                   ignited an appreciation for aspects of software engineering that prioritize user experience. Natasha is 
                   excited to pursue her interests and explore new challenges.
                </p>
                <a className="icon" href="https://www.linkedin.com/in/natasha-bains-478831a4/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                <Tooltip title="natasha.a.bains@gmail.com" interactive>
                <a className="icon" href="mailto:natasha.a.bains@gmail.com"><Mail /></a>
                </Tooltip>
                <br/>
                <br/>
              </div>
              <div style={AboutUs.CARD_STYLE}>
                <Image className="photo" src="roman.png" alt="Roman" height="300px" rounded/>
                <h3>Roman Sityayev</h3>
                <p className="card-text">
                  Roman grew up playing sports and music, and discovered an interest in the relationships between people, 
                  creativity, and technology. He moved to Victoria to pursue his passion for music and technology, working in the
                   telecommunications industry for many years in sales and management while being involved in various musical 
                   projects. Wanting to further his knowledge and skill set, Roman went back to school as a married father of 
                   three. He looks forward to using his skills to help others connect and create through technology.
                </p>
                <a className="icon" href="https://www.linkedin.com/in/romansityayev/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                <Tooltip title="romansityayev@gmail.com" interactive>
                  <a className="icon" href="romansityayev@gmail.com"><Mail /></a>
                </Tooltip>
                <br/>
                <br/>
              </div>
            </ReactCardCarousel>
          </div>
          <MDBRow center className="desc">
            <MDBCol  lg={8} md={10} sm={10}>
              <p >
                Team Checkfront would like to thank their project sponsors Robert McMynn and Stefanie Warren for making this opportunity
                possible. They appreciate all of the encouragement and support Jason Michael and the other Checkfront staff have given 
                their team. They would also like to recognize the continued education and guidance Saryta Schaerer and the ICS faculty 
                have provided them. Team Checkfront looks forward to successfully implementing the NCDI system and learning valuable 
                skills along the way. 
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      );
    }else {
      // it's not a desktop -- render individual cards
      return (
        <div>
          <br />
          <h3> Our Team</h3>
          <MDBRow center className="desc">
            <MDBCol  lg={8} md={10} sm={10}>
              <p>
                The team members have contributed equally to the success of this project. All members have the role of a 
                full-stack developer. However, each individual does have a unique role within the group. Sam acts as the 
                project manager. She keeps the group on task and organized. Natasha acts as the liaison between the project sponsors
                and team. Roman brings his experience working in teams to facilitate team and faculty communication.
              </p>
            </MDBCol>
          </MDBRow>
          <div style={AboutUs.BLOCK_STYLE}>
            <div style={AboutUs.BLOCK_CARD_STYLE}>
              <Image className="photo" src="samreeta.jpeg" alt="Samreeta" height="300px" rounded/>
              <h3>Samreeta Kandola</h3>
              <p className="card-text">
                Sam followed her passion for the outdoors and sciences to Victoria where she earned a Bachelor’s
                degree in Biopsychology from UVic. While working in sales and as a Canadian Certified Optometric
                Assistant, she developed an interest in project management. Exploring this path led Sam to discover the
                field of computer science. Since then, she has been pursuing her passion for programming. Combining her 
                soft and technical skills, Sam looks forward to becoming an indispensable software developer and eventually
                a project manager.
              </p>
              <a className="icon" href="https://www.linkedin.com/in/samreeta-kandola/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a className="icon" href="mailto:sakandola@hotmail.com"><Mail /></a>
              <br/>
              <br/>
            </div>
            <div style={AboutUs.BLOCK_CARD_STYLE}>
              <Image className="photo" src="natasha.jpeg" alt="Natasha" height="300px" rounded/>
              <h3>Natasha Bains</h3>
              <p className="card-text">
                Natasha has always valued a strong commitment to implementing quality code and adapting to any given situation.
                Her biggest strength is her ability to analyze problems from multiple perspectives. Her experience in customer
                service, and coming from a large family has established a deep understanding of communication. This has
                ignited an appreciation for aspects of software engineering that prioritize user experience. Natasha is 
                excited to pursue her interests and explore new challenges.
              </p>
              <a className="icon" href="https://www.linkedin.com/in/natasha-bains-478831a4/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
              <a className="icon" href="mailto:natasha.a.bains@gmail.com"><Mail/></a>
              <br/>
              <br/>
            </div>
            <div style={AboutUs.BLOCK_CARD_STYLE}>
              <Image className="photo" src="roman.png" alt="Roman" height="300px" rounded/>
              <h3>Roman Sityayev</h3>
              <p className="card-text">
                Roman grew up playing sports and music, and discovered an interest in the relationships between people, 
                creativity, and technology. He moved to Victoria to pursue his passion for music and technology, working in the
                telecommunications industry for many years in sales and management while being involved in various musical 
                projects. Wanting to further his knowledge and skill set, Roman went back to school as a married father of 
                three. He looks forward to using his skills to help others connect and create through technology.
              </p>
              <a className="icon" href="https://www.linkedin.com/in/romansityayev/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a className="icon" href="mailto:romansityayev@gmail.com"><Mail /></a>
              <br/>
              <br/>
            </div>
          </div>
          <MDBRow center className="desc">
            <MDBCol  lg={8} md={10} sm={10}>
              <p>
                Team Checkfront would like to thank their project sponsors Robert McMynn and Stefanie Warren for making this opportunity
                possible. They appreciate all of the encouragement and support Jason Michael and the other Checkfront staff have given 
                their team. They would also like to recognize the continued education and guidance Saryta Schaerer and the ICS faculty 
                have provided them. Team Checkfront looks forward to successfully implementing the NCDI system and learning valuable 
                skills along the way. 
              </p>
            </MDBCol>
          </MDBRow>
        </div>
      );
    } 
  }
}

export default AboutUs;