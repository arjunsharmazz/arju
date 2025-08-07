import React from 'react'
import styles from './css/SignupBanner.module.css';
function SignupBanner() {
  return (
    <div className={styles.signupBanner}>
        <div>
            <div><h1>Style Delivered to Your Inbox</h1></div>
            <div>Sign up to get trend alerts, styling tips, and early access to sales</div>
            <div><h4>Signup now ></h4></div>
        </div>
    </div>
  )
} 

export default SignupBanner