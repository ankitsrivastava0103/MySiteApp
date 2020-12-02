import { Button, Container } from "@material-ui/core";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import React, { useState } from "react";
import "./../index.css";

function LogIn({ check, otp }) {
  const [value, setValue] = useState();

  const checkValid = () => {
    check(value);
    if (isValidPhoneNumber(value)) {
      generateOtp();
    }
  };

  const generateOtp = () => {
    const otpValue = Math.floor(1000 + Math.random() * 9000);
    console.log(otpValue);
    otp(otpValue);
  };

  return (
    <Container maxWidth="sm">
      <h3>A Code Will Be Sent To Your Mobile Phone Number</h3>
      <div>
        <p>Enter Your Phone Number :</p>
        <PhoneInput
          className="phone"
          defaultCountry="IN"
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </div>
      <Button variant="contained" color="primary" onClick={checkValid}>
        Get The Code
      </Button>
    </Container>
  );
}

export default LogIn;
