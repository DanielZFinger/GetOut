import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function CreateAccount() {
  return (
    <div className="App">
     <h1>Create Account!</h1>
     <TextField id="outlined-basic" label="Username" variant="outlined"></TextField>
     <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
     <TextField id="outlined-basic" label="Email" variant="outlined"></TextField>
     <Button variant="contained" onClick={() => { console.log('Enter Create Account'); }}>Create</Button>
    </div>
  );
}

export default CreateAccount;
