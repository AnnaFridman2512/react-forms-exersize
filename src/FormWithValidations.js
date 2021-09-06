import {useState} from 'react';


function validate(type, value) {
  switch(type){
    case "firstName":
      if(value.length < 2 ) {
        return "First name must be at leat 2 chars";
      }
      break;

    case "email":
      if (!value.includes("@")) {
        return "Email must be valid.";
      }
      break;
      default: return true;
  }
  
}

export default function FormWithValidations() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [isChecked, setIschecked] = useState('');
const [clothes, setClothes] = useState('');

const [firstNameValid, setFirstNameValid] = useState(true);
const [lastNameValid, setLastNameValid] = useState(true);
const [emailValid, setEmailValid] = useState(true);


const handleChange = (e) => {
  switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        setFirstNameValid(validate("firstName", e.target.value));
        break;
       
       case "lastName":
         setLastName(e.target.value);
         setLastNameValid(validate("lastName", e.target.value));
         break;

       case "email":
         setEmail(e.target.value);
         setEmailValid(validate("email", e.target.value));
         break;

         default: return "enter valid value";
  }
  
};

const handleclothesChange = (e) => {
  setClothes(e.target.value)
}

const handleSubmit = () => {
  if (email !== ''){
    alert('succes');
  }else{
    alert('error');
  }

};

  return (
    <>
    <div>
      <select value={clothes} onChange={handleclothesChange}>
        <option>top</option>
        <option>bottom</option>
        <option>dress</option>
        <option>shoes</option>
      </select>
      <div>{clothes}</div>

      
      <input type="checkbox" 
      checked={isChecked}
       onChange={(e) => setIschecked(e.target.checked)}/>
       
    </div>
    <form>
      <h1>Form with validations</h1>
      <div>
      <input
      id="firstName"
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={handleChange} />
      <div className="error">{firstNameValid }</div>
      </div>

      <div>
      <input
      id="lastName"
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={handleChange} />
      <div className="error">{lastNameValid }</div>
      </div>

      <div>
        <input
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={handleChange} />
      <div className="error">{emailValid }</div>
       </div>

      <button onClick={handleSubmit}>SUBMIT</button>

    </form>
    </>
  )
}