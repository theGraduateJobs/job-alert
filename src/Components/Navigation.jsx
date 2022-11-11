import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Component } from 'react';
import SplitButton from 'react-bootstrap/SplitButton';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Jobs from "./Jobs.jsx"
import InterViewQuestions from "./Interview.jsx"
import JobDesc from "./jobDesc.jsx"
import NotFoundPage from "./NotFoundPage.jsx"
import MoreAnswers from "./MoreAnswers.jsx"

class Navigation extends Component{
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8530428648221526"
  crossorigin="anonymous"></script>

  render(){
    
  
  return (
    <>
      <BrowserRouter>
    <Navbar bg="dark" variant="dark" expand="lg" className = "sticky-top">
      <Container fluid>
        <Navbar.Brand as ={Link} to="/">Job Alert</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll >
            
            <Nav.Link as={Link} to ="/">Jobs</Nav.Link>
            <Nav.Link as={Link} to ="/Interview-Questions">Interview Questions</Nav.Link>
          </Nav>
          <div>
             <a><i className="fa-brands fa-youtube text-light p-2"></i></a>
            <a href="https://t.me/the_graduate_jobs" target="_blank"><i className="fa-brands fa-telegram text-light p-2"></i></a>
            <a href="https://www.instagram.com/thegraduatejobs/" target="_blank"><i className="fa-brands fa-instagram text-light p-2"></i></a>
            <a><i className="fa-brands fa-facebook text-light p-2"></i></a>
          </div>
         <div>
           <div>
             
           </div>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
         
         
          <Route exact path ="/" element ={<Jobs />} />
          <Route exact path ="/Interview-Questions" element ={<InterViewQuestions />} />
          <Route exact path = "/jobs/:id" element = {<JobDesc />} />
           <Route exact path = "/*" element = {<NotFoundPage />}/>
          <Route exact path = "/Interview-Questions/add" element = {<MoreAnswers />}/>
          
        </Routes>
      </BrowserRouter>
    </>
    
  );
}
}

export default Navigation;
