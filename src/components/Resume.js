import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{width:"100%", padding:"10px 10px"}}>
        <TextField
          required
          id="standard-required"
          label="Full Name"
          defaultValue="Name"
          variant="standard"
        />
        <TextField
           required
          id="standard-required"
          label="Password"
          type="password"
          
          variant="standard"
        />
        <TextField
         required
          id="standard-password-input"
          label="E-Mail"
          defaultValue="Example@gmail.com"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label=""
          defaultValue="Hello World"
          
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
        <Button variant="contained" color="success">
  Success
</Button>
      </div>
    </Box>
  );
}