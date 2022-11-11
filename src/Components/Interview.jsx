
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import {Component} from "react"
import Spinner from 'react-bootstrap/Spinner';
import "../App.css"
import {Navigate} from "react-router-dom"
class InterViewQuestions extends Component {
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8530428648221526"
  crossorigin="anonymous"></script>

  state = {
    data : null,
    subject : "HR",
    needMore: false
  }
  componentDidMount(){
  const options = {
    method:"GET"
  }
  const url = "https://mainBackend.venky1gvr.repl.co/InterviewData"
  fetch(url,options).then((res) => res.json()).then((jsonData) => this.setState({data:jsonData}))
}
subjectHandler = (e) =>{
  this.setState({...this.state,subject : e.target.value})
}
  moreAnswers = () =>{
   this.setState({...this.state,needMore:true})
  }
  render(){
    const {data,needMore,subject} = this.state
    if (needMore === true){
     return  <Navigate to = "/Interview-Questions/add" />
    }
    else if (data === null){
      return(
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
    }
  return(
<div className = "container">
      <div className = 'row'>
        <div className = "col-sm-6 gy-4">
    <Form> 
          <Form.Select onChange = {this.subjectHandler}>
            <option>Hr</option>
            <option>Python</option>
            <option>Sql</option>
            <option>Java</option>
            <option>C</option>
            <option>Html</option>
            <option>Css</option>
            <option>JavaScript</option>
            <option>Oops</option>
            <option>React js</option>
            <option>Node js</option>
            <option>Mongo Db</option>
            <option>Important Technical questions</option>
          </Form.Select>
    </Form>
    </div>
  
          
          <div className = "col-sm-6 gy-3 text-end">
            <button className = "btn btn-outline-danger text-dark" onClick = {this.moreAnswers}>Need more Answers?</button>
    </div>
   </div>
   <div className = 'row'>
    <div className = "col-12 gy-2">  
    <Accordion  flush>
      {data.map((i) =>{
  if (i.subject.toLowerCase() === subject.toLowerCase()){
  return(
        <Accordion.Item eventKey={i["_id"]} key = {i["_id"]}>
        <Accordion.Header className = "text-danger">{i.question}</Accordion.Header>
        <Accordion.Body>
          {i.answer}
        </Accordion.Body>
      </Accordion.Item>)
            }})
      }
    </Accordion>
       </div>
    </div>
 </div>
  )
}
}
export default InterViewQuestions;
