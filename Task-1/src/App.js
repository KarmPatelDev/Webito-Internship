import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Records from "./components/Records";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
    toast.success("Record Added.");
  };

  const editRecord = (editRecord, id) => {
    const tempRecords = records.map((record, index) => (index === id) ? editRecord : record);
    setRecords(tempRecords);
    toast.success("Record Edited.");
  };

  const removeRecord = (id) => {
    const tempRecords = records.filter((record, index) => index !== id);
    setRecords(tempRecords);
    toast.success("Record Removed.");
  };

  return (<> 
    <div style={{padding: "6rem"}}>
      <Form addRecord={addRecord}/>
      <Records records={records} editRecord={editRecord} removeRecord={removeRecord}/>
    </div>
    <ToastContainer />
  </>);
};

export default App;