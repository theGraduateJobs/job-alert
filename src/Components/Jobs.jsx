
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Component} from "react"
import {Navigate} from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import "../App.css"


class Jobs extends Component{
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8530428648221526"
  crossorigin="anonymous"></script>

  state = {
    value : false,
    id : null,
    arr : null,
    userSelection : "ALL"
  }
  IndividualJobDescription = (id) =>{
    this.setState({id : id})
   this.setState({value:true})  
  }
 SelectionOftypeOfJobs = (e) =>{
   this.setState({userSelection:e.target.value})
 }
componentDidMount(){
  const options = {
    method:"GET"
  }
  const url = "https://mainBackend.venky1gvr.repl.co/jobs"
  fetch(url,options).then((res) => res.json()).then((jsonData) => this.setState({arr :jsonData.reverse()}))
}
render(){
  const {value,arr,userSelection,id} = this.state
 
  if (value ==true){
    return <Navigate to ={`/jobs/${id}`}/>
  }else if(arr === null){
    return (
      <div className = "d-flex justify-content-center align-items-center height">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      </div>
    )
  }else{
  return (
    <div className = "container">
      <div className = 'row my-4'>
        <div className = "col-lg-6">
              <Form>
                    <Form.Select onChange = {this.SelectionOftypeOfJobs}>
                      <option>ALL</option>
                      <option>GOVT JOBS</option>
                     <option>Private Jobs</option>
                       <option>MNC</option>
                       
                      
                    </Form.Select>
              </Form>
          </div>
        </div>
         
       <div className = 'row gy-2'>
         
        {arr.map((i) => {
      if (userSelection == "ALL"){
        return(
         <div className = "col-md-6 col-lg-4" onClick = {() => {this.IndividualJobDescription(i["_id"])}} key = {i["_id"]}>
              <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={i.url} style={{ height: '10rem'}}/>
                <Card.Body>
                  <Card.Title>{i.companyName}</Card.Title>
                  <Card.Text>
                    {i.role}
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>
        </div>
          )
      }else if(i.category.toUpperCase() === userSelection.toUpperCase()){
      return(
         <div className = "col-md-6 col-lg-3" onClick = {() => {this.IndividualJobDescription(i["_id"])}} key = {i["_id"]}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={i.url} style={{ height: '10rem'}} />
                <Card.Body>
                  <Card.Title>{i.companyName}</Card.Title>
                  <Card.Text>
                    {i.role}
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>
        </div>
          )}
          })
        }
  
   </div>
 
 </div>
  );
}
}
}
export default Jobs;
