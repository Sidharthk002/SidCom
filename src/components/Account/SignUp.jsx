import React from 'react'
import "./SignUp.css"
function SignUp() {
  return (
    <div>
    <div className="container1">
        <div id="box">
            <h2>Create an account</h2>
            <form id="form">
                <label for="name">Full Name</label>
                <input required type="text" placeholder="Enter your full name" id="first-name"/>
                <label for="email">Email</label>
                <input required type="email" placeholder="Enter email" id="email"/>
                <label for="password">Password</label>
                <input required type="password" placeholder="Enter password" id="password"/>
                <label for="password">Confirm Password</label>
                <input required type="password" placeholder="Confirm password" id="confirm"/>
                <input type="submit" value="Sign Up" id="submit"/>
                </form>
                <h5>Already have an account? <span><p> Sign In</p></span></h5>
        </div>
    </div>
    </div>
  )
}

export default SignUp