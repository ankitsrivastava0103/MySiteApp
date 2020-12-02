import React, { useState } from "react";
import Header from "./components/Header";
import LogIn from "./components/Login";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ValidateOTP from "./components/ValidateOTP";

function App() {
  const [status, setStatus] = useState("fasle");
  const [otp, setOtp] = React.useState(0);

  const checkValidity = (value) => {
    setStatus(isValidPhoneNumber(value));
  };
  
  const getOtp = (value) => {
    setOtp(value);
  };
  return (
    <>
      <Header status={status} />
      {status === true ? (
        <ValidateOTP otp={otp} />
      ) : (
        <LogIn check={checkValidity} otp={getOtp} />
      )}
    </>
  );
}

export default App;
