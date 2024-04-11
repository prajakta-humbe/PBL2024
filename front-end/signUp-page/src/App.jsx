import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

const SignUp = () => {
  return (
    <div style={styles.complete1}>
    <NavBar></NavBar>
    <div style={styles.boxForm}>
      <div style={styles.left}>
        <div style={styles.overlay}>
          <h1>Roam Ready</h1>
          <br />
          <p>Platform for your personalized gateway for unforgettable journey. Join us on a journey of discovery, where every destination is a story to be told.</p>
          <span>
            <p>Login with social media</p>
            <a href="#" style={{ color: 'white' }}><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" style={{ color: 'white' }}><i className="fa fa-google" aria-hidden="true"></i> Login with Google</a>
          </span>
        </div>
      </div>
      <div style={styles.right}>
        <h5>SignUp</h5>
        <p>Already have an account? <a href="index.html">Login to Your Account</a> it takes less than a minute</p>
        <form>
          <div style={styles.inputs}>
            <input type="text" placeholder="user name" style={styles.input} />
            <br />
            <input type="password" placeholder="password" style={styles.input} />
            <br />
            <input type="password" placeholder="Confirm password" style={styles.input} />
          </div>
        </form>
        <br /><br />
        <div style={styles.rememberMe}>
          <label style={styles.label}>
            <input type="checkbox" name="item" checked style={styles.checkbox} />
            <span className="text-checkbox">Remember me</span>
          </label>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button style={styles.button}>Signup</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;

const styles = {
  boxForm: {
    marginTop:'100px',
    marginLeft:'100px',
    width:'700px',
    background: '#FFFFFF',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flex: '1 1 100%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    boxShadow: '0 0 20px 6px #090b6f85',
  },
  left: {
    color: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage:'url(../src/components/images/l1img.jpg)',
  },
  overlay: {
    padding: '30px',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  right: {
    padding: '40px',
    overflow: 'hidden',
  },
  inputs: {
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '25px',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #B0B3B9',
  },
  rememberMe: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    display: 'block',
    position: 'relative',
    marginLeft: '30px',
  },
  checkbox: {
    margin: '0',
    marginRight: '7px',
    width: 'auto',
  },
  button: {
    float: 'right',
    color: '#fff',
    fontSize: '14px',
    padding: '12px 35px',
    borderRadius: '50px',
    display: 'inline-block',
    border: '0',
    outline: '0',
    boxShadow: '0px 4px 20px 0px #2D3678',
    backgroundImage: 'linear-gradient(135deg, #2D3678 10%,#2D3678)',
  },
  complete1: {
    backgroundImage:'url(../src/components/images/i.jpg)',    
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    /*backgroundColor:'#96D5F0',*/
    backgroundPosition: 'center', /* Center the background image */
    height: '712px', /* Ensure the container has enough height to display the background */
    overflow: 'hidden', /* Hide any overflow content */
  },
};

