import { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setBirthDate] = useState({varOne:new Date()});
  const [gender, setGender] = useState("Male");
  const [addres, setAddress] = useState("");
  const [numbr, setNumber] = useState();

  const submitForm = () => { 
    console.log(lastName)
    console.log(dateOfBirth)
    console.log(lastName)





    Axios.post('http://localhost:3002/insert', {
      firstName : firstName,
      lastName   : lastName,
      dataOfBirth : dateOfBirth,
      gender : gender,
      address : addres,
      phoneNumber : numbr
    });
  }

  function onChangeValue(event) {
    setGender(event.target.value)
  }

  return (
    <div className="App">
      <h1>Student Registation form</h1>
      <form>
        <div className='ApplicantName'>
          <legend>Name of Applicant:</legend>
          <div>
           <input type="text" placeholder='First name' value={firstName} onChange={(frstnme) => {
            setName(frstnme.target.value)
           }}/>
          </div>
          <div>
           <input type="text" placeholder='Last name' value={lastName} onChange={(lstNme) => {
            setLastName(lstNme.target.value)
           }}/>
          </div>
        </div><br/>

        <div>
          <label>Date of Birth: </label>
          <input type="date" value={dateOfBirth} onChange={(dtBrth) => {
            setBirthDate(dtBrth.target.value)
          }} />
        </div><br/>

        <div className='ApplicantName' onChange={onChangeValue}>
          <legend>Gender:</legend>

          <input type="radio"  value ="Female" name="gender"></input>
          <label>Female</label>

          <input type="radio" value ="Male" name="gender"></input>
          <label>Male</label>
        </div><br/>
        
        <div>
          <label>Address: </label>
          <input type="text" placeholder='Address' value={addres} onChange={(adrs) => {
            setAddress(adrs.target.value)
          }}/>
        </div><br/>

        <div>
          <text>Mobile number: </text>
          <input type="number" placeholder='Mobile number' value={numbr} onChange={(phneNmbr) => {
            setNumber(phneNmbr.target.value)
          }}/>
        </div><br/>

        <button className="button-30" onClick={submitForm} type="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
