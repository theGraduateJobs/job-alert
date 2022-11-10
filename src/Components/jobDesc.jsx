import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
const Description = ()=> {
 let {id} = useParams();
  
 const [value,setValue] = useState(false)

  useEffect(() =>{
    const options = {
    method : "GET",
    headers:{
      "Content-Type":"Application/json",
      "Accept":"Application/json"
        } 
  }
  const url = `https://mainBackend.venky1gvr.repl.co/jobs/${id}`
  fetch(url,options).then((res)=> res.json()).then((jsonData) =>{
        setValue([jsonData])
      
  })
  })
  if (value ===false){
    return(
      <div className = "d-flex justify-content-center align-items-center height">
        <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
    </div>
    )
  }
  
    return (
      <>
      {value.map((i) =>{
        return(
       
      <Card key = {i["_id"]}>
      <Card.Header as="h5" className="text-center text-danger">{i.companyName}</Card.Header>
      <Card.Body>
        <Card.Title className = "text-success">{i.role}</Card.Title>
         {i.location !== "" &&   <Card.Title as= "h6"><span className = "text-primary">Location : </span>{i.location}</Card.Title>}
        {i.qualifications !== "" &&  <Card.Title as="h6"><span className = "text-primary">Qualification : </span>{i.qualifications }</Card.Title>}
        {i.experience !== "" &&  <Card.Title as="h6" ><span className = "text-primary">Experience: </span> {i.experience}</Card.Title>}
        {i.skills !== "" &&  <Card.Title as="h6"><span className="text-primary">Skills: </span>{i.skills}</Card.Title>}
        {i.AboutCompany !== "" &&  <Card.Title as="h6"><span className="text-primary">About: </span>{i.AboutCompany}</Card.Title>}
      
        {i.requirements.length >1 && <div> <span className="text-danger" as="h6">Requirements: </span>{i.requirements.map((j) => <li>{j}</li>)}</div>}
        {i.rolesAndResponsibility.length >1 && <div> <span className="text-danger" as="h6">Responsibilities: </span>{i.rolesAndResponsibility.map((j) => <li>{j}</li>)}</div>}
        {i.contactDetails !== "" &&  <Card.Title as="h6" className="col-lg-6 my-3"><span className="text-primary">Contact-details: </span>{i.contactDetails}</Card.Title>}
        {i.lastDate !== "" &&  <Card.Title as="h6"><span className="text-primary">Last-date: </span>{i.lastDate}</Card.Title>}
       <div className= "text-center">
         <img src ="https://res.cloudinary.com/venkygvr/image/upload/v1667459818/image-2_c4ujxq.gif" /> <br />
        <Button variant="primary"><a href={i.link} className="text-light text-decoration-none" target= "_blank">Apply Now</a></Button>
        </div>
      </Card.Body>
    </Card>)}
 )}
      </>
  )
  }

export default Description;

//https://allinonejobs.herokuapp.com/