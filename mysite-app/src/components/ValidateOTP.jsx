import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import "./../index.css";

function ValidateOTP({ otp }) {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState("false");
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const verify = () => {
    if (value === otp) {
      setStatus("true");
    } else {
      setStatus("false");
    }
  };

  return (
    <Container maxWidth="sm">
      <h3>Enter The Code Sent To Your Phone (check console for OTP)</h3>
      <div>
        <p>Enter Your Phone Number :</p>
        <input placeholder="Enter OTP" onChange={handleChange}></input>
      </div>
      <Button variant="contained" color="primary" onClick={verify}>
        Verify
      </Button>
      {status === "true" ? (
        <div>Phone Number Verified</div>
      ) : (
        <div>OTP Entred is Incorrect</div>
      )}
    </Container>
  );
}

export default ValidateOTP;
