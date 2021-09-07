
import './App.css';
import FormWithValidations from './FormWithValidations.js';
import DisabledButton from './DisabledButton.js';
import ReactHookForm from './ReactHookForm.js';
import ReactHookFormClass from './ReactHookFormClass.js';
import CreditCardValidation from './CreditCardValidation.js';
import New from './New.js';


function App() {
  return(
    <>
    <FormWithValidations />
    <DisabledButton />
    <ReactHookForm />
    <ReactHookFormClass />
    <CreditCardValidation />
    <New />

    </>
  )
}




export default App;
