import Button from '@material-ui/core/Button';

import * as React from 'react';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Container,Paper } from '@material-ui/core';

export default function Student() {
    const paperStyle = {padding:'50px 20px',width:600,margin:"20px auto"}
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
          method:"POST", 
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }
   return (
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit 
      </Button>
    </Box>
    {name}
    {address}
    </Paper>
    </Container>
  );
}
