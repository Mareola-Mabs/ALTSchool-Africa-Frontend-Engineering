import "./assets/app.css"
import { useState } from "react"


const Accordion = (props)=>{
  const [classname, setClassName] = useState(true)

  const handleClick =()=>{
    setClassName(prev => !prev)
}

  
  return(
    <div className="parent">
      <div className="accordion" onClick={handleClick}>
        {props.title}
      </div>
      <div className={`${classname}`}>
        {props.children}
      </div>
    </div>
  )
}

const AccordionChild = (props)=>{
  return(
    <div className="child">
      {props.title}
    </div>
  )
}

const Container = ()=>{
  return (
    <div>
    <Accordion title="Section1">
        <AccordionChild title="Item1"/>
      </Accordion>
      <Accordion title="Section2">
        <AccordionChild title="Item2"/>
      </Accordion>
      <Accordion title="Section3">
        <AccordionChild title="Item3"/>
      </Accordion>
      <Accordion title="Section4">
        <AccordionChild title="Item4"/>
      </Accordion>
      <Accordion title="Section5">
        <AccordionChild title="Item5"/>
      </Accordion>
  </div>
  )
}






// Create root Component
const App = () => {


  return(
    <div>
      <Container />
    </div>
    

  ) 
};

export default App;
