import React, { useHistory  ,useState, useEffect } from 'react';
import './login.css';
import background from './loginBackground.jpg';
import logo from './SFState_Logo.png';
import {Link} from "react-router-dom";

const Login =() =>{
    const [userType, setUserType] = React.useState("");
    let routeName = "";
    const [nextRoute,setRoute] = React.useState(`${routeName}`);
    const ShareValue = () =>{
       
        if(`${userType}`.toLowerCase() === "student"){
            routeName ="/ulearn/#/sTaskList"
            setRoute(nextRoute => "/ulearn/#/sTaskList");
            // alert(`welecome Student`);
            
        }else if(`${userType}`.toLowerCase()==="professor"){
            routeName ="/ulearn/#/iTaskList"
            setRoute(nextRoute => "/ulearn/#/iTaskList");
            // alert(`Welcome Professor`);
        }else{
            alert(`Invalid Login`);
            routeName ="/ulearn/#/login"
            setRoute(nextRoute => "/ulearn/#/login");
        }
    }

    return (
        <div className ="backgroundImage">
        <div class="html not-logged-in bg">
        <div id="center">
            <img class="img-responsive" src={logo} alt ={logo}/>
            <h1 className ="mike" class="text-center margin-15 padding-15 mike"> uLearn Global Login</h1>
            <form title="SF State Global Login">

            <div class="form-group">
                                    <label className ="loginLabel" for="username" >SF State ID or Email</label>
                                    <input class="form-control" id="username" name="j_username" type="text" tabindex="1"
                                                autofocus onChange={(event)=> setUserType(event.target.value)}></input>
            </div>

            <div class="form-group">
                                    <label className ="loginLabel2" for="password" class="control-label" >SF State Password</label>
                                        <input class="form-control" id="password" name="j_password" tabindex="2" type="password"></input>
            </div>
            <div class="form-group">
            <Link to={{
                pathname:`${nextRoute}`,
                }}>
                                        <button class="btn-primary-true btn-lg btn-block login"
                                                  onClick={ShareValue}
                                                  >Login</button>
                                                  </Link>
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