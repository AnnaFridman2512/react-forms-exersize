import { useEffect, useState } from "react";

export default function DisabledButton(){
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [isValid, setIsvalid] = useState(false);



    const handleSubmit2 = () => {//clear the input after submiting
        setValue('');
        setValue2('');
    };

    const validate = () =>{
        if(value.length > 0 && value2.length > 0){
            setIsvalid(true);
        }else{
            setIsvalid(false);
        }
    };

    useEffect(() => {
        validate();
    },);



    return(
        <>
        <h1>Class Exersize</h1>
        <p>1. Create a simple form with two input text field and one button.
2. The input field should be validated onChange.
3. The button should be disabled by default and only enabled when the value of both inputs is valid.
4. Once the button is clicked the inputs should be cleared.</p>
            <input
                type="text"//"controled input" its value comes from state
                value={value}
                onChange={(e)=> setValue(e.target.value)}//when the value changes - the value state changes
            />
            <input
                type="text"//"controled input" its value comes from state
                value={value2}
                onChange={(e)=> setValue2(e.target.value)}//when the value changes - the value state changes
            />

            <button 
                disabled={isValid ? false : true}//if isvalid true (if there is more than one char in the input) the button is enabled, else its disabled
                onClick={handleSubmit2}
                >submit</button>

        </>
    );
}