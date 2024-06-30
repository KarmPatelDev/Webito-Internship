import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ getUsers }) => {

    const [inputs, setInputs] = useState({name: "", phoneNumber: "", email: "", postalCode: "", city: "",  state: ""});

    const changeHandler = async (event) => {
        setInputs((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ));  
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const result = await axios.post("http://localhost:8081/user/create", inputs);
            if(result?.data?.success){
                toast.success(result?.data?.message);
            }
            else{
                toast.error(result?.data?.message);
            }
        }
        catch(error){
            toast.error(error);
        }
        getUsers();
        setInputs({name: "", phoneNumber: "", email: "", postalCode: "", city: "",  state: ""});
    };

    const handleReset = async (event) => {
        event.preventDefault();
        setInputs({name: "", phoneNumber: "", email: "", postalCode: "", city: "",  state: ""});
    };

    return (<>
        <div id="table-form">

        <h1>Create User</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div>
          <label>Name: </label>
          <input type="text" name="name" value={inputs.name} onChange={changeHandler} required/>
          </div>

          <div>
          <label>Phone No: </label>
          <input type="tel" pattern="[0-9]*" maxLength="10" minLength="10" name="phoneNumber" value={inputs.phoneNumber} onChange={changeHandler} required/>
          </div>

          <div>
          <label>Email: </label>
          <input type="email" name="email" value={inputs.email} onChange={changeHandler} required/>
          </div>

          <div>
          <label>Postal Code: </label>
          <input type="tel" pattern="[0-9]*" maxLength="6" minLength="6" name="postalCode" value={inputs.postalCode} onChange={changeHandler} required/>
          </div>

          <div>
          <label>City: </label>
          <input type="text" name="city" value={inputs.city} onChange={changeHandler} required/>
          </div>

          <div>
          <label>State: </label>
          <input type="text" name="state" value={inputs.state} onChange={changeHandler} required/>
          </div>

          
          <button type="submit" id="save-button" style={{backgroundColor: "blue"}}>Submit</button>
          <button type="reset" id="save-button" style={{backgroundColor: "black"}}>Reset</button>
        </form>
        </div>

    </>);
};

export default Form;