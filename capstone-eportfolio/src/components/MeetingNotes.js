import React, {Component} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './PDF.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class MeetingNotes extends Component {
  state = {numPages: null, pageNumber: 1 }

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  }

  // navigate through the loaded pdf file pages
  goToPrevPage = () =>
    {
    if (this.state.pageNumber > 1) {
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    }
    }
  goToNextPage = () =>
    {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    }
  }

  render() {
    const {pageNumber, numPages } = this.state;

    return (
      <div>
        <h3>Meeting Notes</h3>
        <Link to="/PDFs/MeetingNotes.pdf" className="link" target="_blank" download style={{color:"#366fc9"}}>Download Meeting Notes</Link>
        <Alert variant="secondary" style={{margin:"10px auto 10px auto"}}>
          <Button class="theButton" variant="outline-secondary" onClick={this.goToPrevPage}>Prev</Button>{' '}
          <Button class="theButton" variant="outline-secondary" onClick={this.goToNextPage}>Next</Button>{' '}
        </Alert>
        <Document
          className="document"
          file='/PDFs/MeetingNotes.pdf'
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}>
          <Page pageNumber={pageNumber} />
        </Document>
        <Alert variant="secondary" style={{margin:"10px auto 10px auto"}}>
          <Button class="theButton" variant="outline-secondary" onClick={this.goToPrevPage}>Prev</Button>{' '}
          <Button class="theButton" variant="outline-secondary" onClick={this.goToNextPage}>Next</Button>{' '}
          <br/>
          Page {pageNumber} of {numPages}
        </Alert>
      </div>
    );
  }

}

export default MeetingNotes;