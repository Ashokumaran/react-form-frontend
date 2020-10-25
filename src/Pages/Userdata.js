import React,{useState} from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import CountriesSelection from '../Components/CountriesSelection';
import StateSelection from '../Components/StateSelection';
import CitySelection from '../Components/CitySelection';
import csc from 'country-state-city';
import { useForm } from "react-hook-form";
import './Userdata.css';


function Userdata() {
  const { register, handleSubmit,errors } = useForm();
  const [input, setInput] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    city: "",
    addressline1: "",
    addressline2: "",
    gender: "",
    maritalstatus: ""
  })
  const handleChange=(event)=>{
    const value = event.target.value;
    const name = event.target.name;
    setInput({
      ...input,
      [name]: value
    });
  }



  const [country, setCountry] = useState("")

  const handleCountry = (event) => {
    const countryData = csc.getCountryById(event.target.value);
    const value = countryData.name
    const name = event.target.name;
    console.log(name,value)
    setInput({
      ...input,
      [name]: value
    });
    let selected = event.target.value;
    setCountry(selected)
  }

  const [state, setState] = useState("")

  const handleState = (event) => {
    const stateData = csc.getStateById(event.target.value);
    const value = stateData.name
    const name = event.target.name;
    setInput({
      ...input,
      [name]: value
    });
    let selected = event.target.value;
    setState(selected)
  }

  const [city, setCity] = useState("")

  const handleCities = (event) => {
    const cityData = csc.getCityById(event.target.value);
    const value = cityData.name
    const name = event.target.name;
    setInput({
      ...input,
      [name]: value
    });
    let selected = event.target.value;
    setCity(selected)
    if(!city)
    console.log(true)
  }
  const onSubmit=(data)=>{
    const state = csc.getStateById(data.state).name;
    const country = csc.getCountryById(data.country).name;
    const city = csc.getCityById(data.city).name;
    const renderedData = {...data,state,country,city}
    console.log(renderedData)
    fetch(process.env.SERVERURL||"http://localhost:3000/userdata", {method: "POST",
        body: JSON.stringify(renderedData),
        headers: {
            "Content-Type": "application/json"
        }})
        .then((res)=>res.json())
        .then((result)=>{
          if(result.message==="User Registered")
          {
              alert("Data Submitted Sucessfully");
          }
        })
        .catch((error)=>console.log(error))
  } 
    return (
      <>
      <h1>User Data Configuration</h1>
      <div className="row justify-content-around mt-4">
                      <div className="col-3">
          <img src = {require('../Images/userRegistration.png')} alt="Registration" height={400} width={400}/>
        </div>
            <div className="col-9">
            <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Row className="justify-content-center">
      
    <Form.Group as={Col} sm={3} controlId="formName" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="name" value={input.name} placeholder="Enter Name"   onChange={handleChange} ref={register({ required: true })}/>
      {errors.name && <span>* Name is required</span>}
    </Form.Group>

    <Form.Group as={Col} sm={3} controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={input.email}  onChange={handleChange} ref={register({ required: true })} />
      {errors.email && <span>* Email is required</span>}
    </Form.Group>
  </Form.Row>
  <Form.Row className="justify-content-center">
  <Form.Group as={Col} sm={2} controlId="formCountry">
      <Form.Label>Country</Form.Label>
      <Form.Control as="select" name="country" onChange={handleCountry} ref={register({ required: true })}>
        <CountriesSelection />
      </Form.Control>
      {errors.country && <span>* Country is required</span>}

    </Form.Group>
    <Form.Group as={Col} sm={2} controlId="formState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" name="state" onChange={handleState} ref={register({ required: true })}>
      
      <StateSelection states={country}/>
      </Form.Control>
      {errors.state && <span>* State is required</span>}
    </Form.Group>

    <Form.Group as={Col} sm={2} controlId="formCity">
      <Form.Label>City</Form.Label>
      <Form.Control as="select"  name="city"  onChange={handleCities} ref={register({ required: true })}>
      <CitySelection cities={state}/>
      </Form.Control>
      {errors.city && <span>* CIty is required</span>}

    </Form.Group>
  </Form.Row>
  <Form.Row className="justify-content-center">
  <Form.Group className="padding-div" as={Col} sm={6} controlId="formAddress1">
    <Form.Label>Address Line 1</Form.Label>
    <Form.Control placeholder="1234 Main St" name="addressline1" value={input.addressline1}  onChange={handleChange} ref={register({ required: true })}/>
    {errors.addressline1 && <span>* Address is required</span>}
  </Form.Group>
  </Form.Row>

  <Form.Row className="justify-content-center">
  <Form.Group className="padding-div" as={Col} sm={6} controlId="formAddress2">
    <Form.Label>Address Line 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" name="addressline2" value={input.addressline2}  onChange={handleChange} ref={register({ required: true })}/>
    {errors.addressline2 && <span>* Address is required</span>}
  </Form.Group>
  </Form.Row>

  <Form.Row className="justify-content-center">
  <Form.Group as={Col} sm={3} controlId="formGender">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" name="gender" value={input.gender}  onChange={handleChange} ref={register({ required: true })}>
        <option>Female</option>
        <option>Male</option>
        <option>Genderqueer</option>
      </Form.Control>
      {errors.gender && <span>* Gender is required</span>}

    </Form.Group>

    <Form.Group as={Col} sm={3} controlId="formMarital">
      <Form.Label>Marital Status</Form.Label>
      <Form.Control as="select" name="maritalstatus" value={input.maritalstatus}  onChange={handleChange} ref={register({ required: true })}>
        <option>Single</option>
        <option>Married</option>
      </Form.Control>
      {errors.maritalstatus && <span>* Marital Status is required</span>}

    </Form.Group>
  </Form.Row>
   <Form.Row className="justify-content-center">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
</Form>
        </div>
        </div>
        </>
    )
    }
export default Userdata
