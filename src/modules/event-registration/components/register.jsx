import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Fab, Typography } from "@mui/material";
import { ApiClient } from "../../../shared/services/api-client";

export const EventRegister = () => {
  const [message, setmessage] = React.useState("");
  const firstname = React.useRef();
  const lastname = React.useRef();
  const email = React.useRef();
  const githubhandle = React.useRef();
  const password = React.useRef();
  const confirmpassword = React.useRef();

  const Register = async () => {
    const registerObject = {
      'firstname': firstname.current.value,
      'lastname': lastname.current.value,
      'email': email.current.value,
      'githubhandle': githubhandle.current.value,
      'password': password.current.value,
      'confirmpassword': confirmpassword.current.value,
    };
    const res = await ApiClient.post("http://localhost:2828/eventregister",registerObject);
    console.log("Response is: ", res);
    setmessage(res.data.message);
  };

  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiInputBase-root": {
              width: 1000,
              maxWidth: "100%",
              mb: 3,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <h3>Begin by confirming the following information:</h3>
          <div>
            <TextField
              inputRef={firstname}
              id="outlined-helperText"
              label="First Name"
            />
            <TextField
              inputRef={lastname}
              id="outlined-helperText"
              label="Last Name"
            />
            <TextField
              inputRef={email}
              id="outlined-helperText"
              label="email"
            />
            <TextField
              inputRef={githubhandle}
              id="outlined-helperText"
              label="Github handle"
            />

            <h3>
              Please enter a password for your account. Passwords must include
              the following:
            </h3>
            <ul>
              <li>a lowercase letter (a-z)</li>
              <li>an uppercase letter (A-Z)</li>
              <li>a number (0-9)</li>
              <li>a special character (!@#$%)</li>
              <li>at least 12 characters</li>
            </ul>

            <TextField
              inputRef={password}
              id="outlined-helperText"
              label="Password"
            />
            <TextField
              inputRef={confirmpassword}
              id="outlined-helperText"
              label="Confirm Password"
            />
            <br/>
            <Fab onClick={Register} color="primary.light" variant="extended">
              Register
            </Fab>
          </div>
        </Box>
        <h2>{message}</h2>
      </Container>
    </>
  );
};
export default EventRegister;
