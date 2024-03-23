import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import LoginAnimation from './assets/Animation - 1711180164202.json';
import Lottie from 'react-lottie';
import { toast, ToastContainer} from "react-toastify";
import axios from 'axios';
const  Register=()=>{
  const [user, setUser] = useState({
    "userEmail":"",
    "userPassword":""
  });
    const animationOptions = {
        loop: true,
      autoplay: true, 
      animationData: LoginAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const handleOnChange=(e)=>{
      setUser((pre)=>({...pre, [e.target.name]: e.target.value}))
    }
    const handleRegisterUser=(e)=>{
      console.log(user)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ${}'
        },
        body: JSON.stringify(user)
      }
      try{
        // const response = axios.post();
      }catch{
        toast.error('Error while login');
      }
    }
  return (
    <MDBContainer className="my-5">
    <ToastContainer/>
      <MDBCard>
        <MDBRow className='g-0'>

          

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="scissors fa-3x me-3" style={{ color: 'dark' }}/>
                <span className="h1 fw-bold mb-0">Raja Rani</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Register your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={user.userEmail} name='userEmail' onChange={handleOnChange}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={user.userPassword} name='userPassword' onChange={handleOnChange}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleRegisterUser}>Next</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Have an account? <Link to="/login" style={{color: '#393f81'}}>Login here</Link></p>

              <div className='d-flex flex-row justify-content-start'>
                {/* <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a> */}
              </div> 

            </MDBCardBody>
          </MDBCol>
          <MDBCol md='6'>
            {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/> */}
            <Lottie options={animationOptions}/>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;