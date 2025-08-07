import React from 'react'
import styles from './css/SignupBanner.module.css';
import { useNavigate } from 'react-router-dom';
function SignupBanner() {
  const navigate = useNavigate();
  const signup=()=>{
    navigate('/signup')
  }
  return (
    <div className={styles.signupBanner}>
        <div>
            <div><h1>Style Delivered to Your Inbox</h1></div>
            <div>Sign up to get trend alerts, styling tips, and early access to sales</div>
            <div onClick={signup}><h4>Signup now ></h4></div>
        </div>
    </div>
  )
} 

export default SignupBanner