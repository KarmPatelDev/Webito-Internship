import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Users from "./Users";
import History from "./History";

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/history" element={ <History /> } />
      </Routes>
    </>
  );
};

export default App;
