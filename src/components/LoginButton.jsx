import React, { Component ,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FaShareAlt} from 'react-icons/fa'
import CustomButton from './Button'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import {FiLogIn} from 'react-icons/fi'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f3f3f3',
  boxShadow: 24,
  p: 4,
  fontFamily:'"Cascadia Code",Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace',
};


export default function BasicModal(props) {
    const navigate = useNavigate();
  const [note, setnote] = useState({email:"",password:""});
  const handlechange=(e)=>{
    setnote({...note,   [e.target.name]:e.target.value})
    console.log(note);
  }

  const handlesubmit= async(e)=>{
    console.log("hello")
    e.preventDefault();
    const email=note.email
    const password=note.password
    console.log(email, password);
    // console.log(note.email," ",note.password)
        const response=await fetch("http://localhost:5000/api/auth/loginuser",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({email,password}),
          });
        const json=await response.json();
        console.log(json.success);
        if(json.success)
        {
          //redirect
          localStorage.setItem('token',json.authtoken)
          console.log("success mf")
          navigate('/home');

        }
        else
        {
          // alert("invalid cred");
          console.log("invalid cred")
        }

    }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    
    <div>
<div className="Card8Share" onClick={handleOpen}>

<CustomButton title="Login"/>
        
</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style} style={{"display":"flex","gap":"0.5rem","height":"65%","width":"60%","borderRadius":"1rem" ,"padding":"3rem"
}}>
            
        <MDBContainer className="d-flex flex-column">

{/* <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
<MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
    Donor?
    </MDBTabsLink>
</MDBTabsItem>
<MDBTabsItem>
    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
    Need help?
    </MDBTabsLink>
</MDBTabsItem>
</MDBTabs> */}

{/* <div className="signup-title">
    Sign Up 
</div> */}

<MDBTabsContent>

<MDBTabsPane show={justifyActive === 'tab1'}>

    {/* <div className="text-center mb-3">
    <p>Sign in with:</p>

    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
    </div>

    <p className="text-center mt-3">or:</p>
    </div> */}

<div className="close-icon">
    <CloseIcon onClick={handleClose}/>
</div>
    
  
<MDBInput wrapperClass='mb-4' label='Email address' id='form1' name='email' type='email' onChange={handlechange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' onChange={handlechange}/>

    <div className='d-flex justify-content-center mb-4'>
   <div className="fp"> <a className='links' href="">Forgot Password?</a> </div>
    </div>
    
    {/* <MDBBtn className="mb-4 w-100" data-dismiss="Modal" onClick={()=>window.location.reload()}>Sign up</MDBBtn> */}
    <div className="signup-btn" onClick={handlesubmit}>
    <CustomButton title='Login'/>
    </div>
   

</MDBTabsPane>

</MDBTabsContent>

</MDBContainer>

        </Box>
      </Modal>
    </div>
  );
}