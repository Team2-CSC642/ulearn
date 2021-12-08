import React, { useState, useEffect } from 'react';
import './login.css';
import background from './loginBackground.jpg';
import logo from './SFState_Logo.png';

const Login =() =>{
    const [userType, setUserType] = React.useState("");
    const ShareValue = () =>{
        alert(`userName: ${userType}`)
    }

    return (
        <div className ="backgroundImage">
        <div class="html not-logged-in bg">
        <div id="center">
            <img class="img-responsive" src={logo} alt ={logo}/>
            <h1 className ="mike" class="text-center margin-15 padding-15"> uLearn Login</h1>
            <form title="SF State Global Login">

            <div class="form-group">
                                    <label className ="loginLabel" for="username" >SF State ID or Email</label>
                                    <input class="form-control" id="username" name="j_username" type="text" tabindex="1"
                                                autofocus onChange={(event)=> setUserType(event.target.value)}></input>
            </div>

            <div class="form-group">
                                    <label className ="loginLabel" for="password" class="control-label" >SF State Password</label>
                                        <input class="form-control" id="password" name="j_password" tabindex="2" type="password"></input>
            </div>

            <div class="form-group">
                                        <button class="btn-primary-true btn-lg btn-block" type="submit" name="_eventId_proceed" tabindex="3"
                                                  onClick={ShareValue}
                                                  >Login</button>
                                  </div>
            </form>

            <p className="test"class="text-center padding-top-20">
                  <a class="login" href="https://its.sfsu.edu/helpsignin">Get help signing in</a>
                </p>

                <p className="test" class="text-center padding-top-20">
				<a className= "tfa" class="tfa" href="https://2fa.sfsu.edu">Not enrolled in 2FA? Enroll now</a>
                        </p>
        </div>
        </div>
        </div>
    )
}

export default Login