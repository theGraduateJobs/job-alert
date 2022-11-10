import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const MoreAnswers = ()=> {
  const [value,setValue] = useState(false)
  const [subjectHandler,setSubjectHandler] = useState("select")
  const [questionHandler,setQuestionHandler] = useState("select")
  const [userName,setName] = useState("")
  const [answer,setAnswer] = useState("")

const userDataHandler = (e) =>{
  setName(e.target.name)
}
const userDataHandlerAnswer = (e) =>{
  setAnswer(e.target.value)
}
const userAnswersHandler = (e) => {
  console.log(userName)
  console.log(answer)
  e.preventDefault()
  if (userName !=="" && answer !== ""){
   alert("success")
  }else{
    alert("not success full")
  }
}

const chooseQuestion = (e) =>{
  setQuestionHandler(e.target.value)
}

const chooseSubject =(e) =>{
  setSubjectHandler(e.target.value) 
}

  useEffect(() =>{
    const options = {
    method : "GET",
    headers:{
      "Content-Type":"Application/json",
      "Accept":"Application/json"
        } 
  }
  const url = `https://mainBackend.venky1gvr.repl.co/InterviewData`
  fetch(url,options).then((res)=> res.json()).then((jsonData) =>{
        setValue(jsonData)
      
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
      <div className= "container my-3">
        <div className="row gy-2 my-3">
          <div className = "col-md-6">
             <Form> 
                <Form.Select onChange = {chooseSubject}>
                  <option>Select</option>
                  <option>HR</option>
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
          </div>
        <div className = "row gy-2">
          <div className = "col-md-6">
            {subjectHandler.toLowerCase() !== "select" && <div>
              
              <Form> 
                <Form.Select onChange={chooseQuestion}>
                  <option>Select</option>
                  {value.map((i) => {
                   if(i.subject.toLowerCase() === subjectHandler.toLowerCase()){
               return(
                        <option key = {i["_id"]}>{i.question}</option>
                      )}
                 })}
                </Form.Select>
              </Form>
              {questionHandler.toLowerCase() !== "select" &&  
                <Form className = "text-center my-2" onSubmit = {userAnswersHandler}>
                  <Card border="primary">
                  <Card.Header><input type ="text" className = "px-2" placeholder="Enter your name" onChange={userDataHandler} name = "userName"/></Card.Header>
                  <Card.Body>
                    <Card.Title className= "text-danger">Question : {questionHandler}</Card.Title>
                    <Card.Text>
                    
                      <textarea rows = "6" cols = "20" className="mb-2" placeholder = "Enter your Answer Here" onChange={userDataHandlerAnswer} name="answer"/ > <br />
                      <Button variant="primary" type = "submit">Submit</Button>
                    </Card.Text>
                  </Card.Body>
                 </Card>
              </Form>
              }
              </div>
            }
          
            </div>
        </div>
      </div>
      </>
  )
  }

export default MoreAnswers;








// <Accordion  flush>
//                     {value.map((i) =>{
//                       if(i.subject.toLowerCase() === "hr"){
//                       return(
//                      <Accordion.Item eventKey={i["_id"]} key = {i["_id"]}>
//                       <Accordion.Header className = "text-danger">{i.question}</Accordion.Header>
//                       <Accordion.Body>
//                         {i.answer}
//                       </Accordion.Body>
//                     </Accordion.Item>)}
//                  }
//                )}
//          </Accordion>
// subjectHandler.toLowerCase()