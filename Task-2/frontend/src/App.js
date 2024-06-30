import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Records from "./components/Records";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const App = () => {

  const [records, setRecords] = useState([]);

  const getUsers = async () => {
    const users = await axios.get("http://localhost:8081/user/get-users");
    if(users?.data?.success){
        setRecords(users?.data?.users);
    }
}

  return (<> 
    <div style={{padding: "6rem"}}>
      <Form getUsers={getUsers}/>
      <Records records={records} getUsers={getUsers}/>
    </div>
    <ToastContainer />
  </>);
};

export default App;